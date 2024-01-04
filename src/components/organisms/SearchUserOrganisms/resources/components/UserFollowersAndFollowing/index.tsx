/* eslint-disable @next/next/no-img-element */
import { useSearchParams } from 'next/navigation'
import { NumberParam, useQueryParam } from 'use-query-params'
import { Pagination } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'

import Error from '@molecules/Error/Error'
import FollowersAndFollowingCart from '@molecules/FollowersAndFollowingCart/FollowersAndFollowingCart'
import Loading from '@molecules/Loading/Loading'
import NoData from '@molecules/NoData/NoData'

import { getUserFollowersAndFollowing } from '@core/services/api/get-user-followers-following-api'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

const UserFollowersAndFollowing = ({
    inputSearch,
    openModal,
    userDetailSocial: { followers, following },
    setModalAvatar,
    setOpenModal
}: {
    inputSearch: string | null
    openModal: TCriticalAnyType
    userDetailSocial: TCriticalAnyType
    setModalAvatar: TCriticalAnyType
    setOpenModal: TCriticalAnyType
}) => {
    const searchParams = useSearchParams()

    const currentPageFollowersAndFollowing = Number(searchParams.get('pageFollowersAndFollowing')) || 1
    const [, setQuery] = useQueryParam('pageFollowersAndFollowing', NumberParam)
    const {
        isLoading,
        isError,
        error,
        isSuccess,
        data
    }: { isLoading: boolean; isError: boolean; error: TCriticalAnyType; isSuccess: boolean; data: TCriticalAnyType } =
        useQuery({
            queryKey: ['getFollowerAndFollowing', [inputSearch, openModal, currentPageFollowersAndFollowing]],

            queryFn: () =>
                getUserFollowersAndFollowing({
                    inputSearch: inputSearch,
                    type: openModal.type,
                    pageDataFollowersAndFollowing: currentPageFollowersAndFollowing
                }),
            enabled: !!(openModal.type !== '' && inputSearch),
            retry: 1,
            retryOnMount: false,
            staleTime: 1200
        })

    if (isLoading) {
        return (
            <div className='w-full flex items-center justify-center'>
                <Loading />
            </div>
        )
    }
    if (isError) {
        return (
            <div className='w-full flex items-center justify-center'>
                <Error text={error.response.data.message} />
            </div>
        )
    }

    if (isSuccess) {
        if (!data?.data || data?.data?.length === 0) {
            return (
                <div className='w-full flex items-center justify-center'>
                    <NoData text='User Not Found!' />
                </div>
            )
        }
        const page = Math.ceil(openModal.type === 'followers' ? followers / 30 : following / 30)

        return (
            <div className='flex flex-col gap-y-2'>
                {page > 1 && (
                    <div className='flex justify-center'>
                        <Pagination
                            total={page}
                            value={currentPageFollowersAndFollowing}
                            onChange={(numPage) => setQuery(numPage)}
                            color='orange'
                            size='sm'
                        />
                    </div>
                )}
                {data?.data?.map((itemsFallowAndFollowing: TCriticalAnyType) => (
                    <FollowersAndFollowingCart
                        itemsFallowAndFollowing={itemsFallowAndFollowing}
                        setModalAvatar={setModalAvatar}
                        setOpenModal={setOpenModal}
                        key={itemsFallowAndFollowing.id}
                    />
                ))}
            </div>
        )
    }
}

export default UserFollowersAndFollowing
