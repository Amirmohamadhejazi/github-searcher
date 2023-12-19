/* eslint-disable @next/next/no-img-element */
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { IoIosLink } from 'react-icons/io'
import { NumberParam, useQueryParam } from 'use-query-params'
import { Pagination } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'

import Error from '@molecules/Error/Error'
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
}: // pageDataFollowFollowing
{
    inputSearch: string | null
    openModal: TCriticalAnyType
    userDetailSocial: TCriticalAnyType
    setModalAvatar: TCriticalAnyType
    setOpenModal: TCriticalAnyType
}) => {
    const searchParams = useSearchParams()

    const router = useRouter()
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
                    <div
                        className='bg-gray-300 p-2 rounded-md flex items-center justify-between'
                        key={itemsFallowAndFollowing.id}
                    >
                        <div className='flex items-center gap-2'>
                            <div
                                className='w-10 h-10 bg-blue-950 shadow-2xl rounded-full p-1  cursor-pointer '
                                onClick={() =>
                                    setModalAvatar({
                                        open: true,
                                        data: {
                                            avatar: itemsFallowAndFollowing.avatar_url,
                                            name: itemsFallowAndFollowing.login
                                        }
                                    })
                                }
                            >
                                <div className='h-full w-full rounded-full overflow-hidden'>
                                    <img
                                        src={itemsFallowAndFollowing.avatar_url}
                                        className='w-full h-full object-cover'
                                        alt=''
                                    />
                                </div>
                            </div>
                            {/*  */}
                            <span className=' font-semibold'>{itemsFallowAndFollowing.login}</span>
                            {/* */}
                        </div>
                        <div
                            className='p-1 bg-slate-200 rounded-md cursor-pointer'
                            onClick={() => {
                                setOpenModal({
                                    open: false,
                                    type: ''
                                })
                                router.push(`?search=${itemsFallowAndFollowing.login}`)
                            }}
                        >
                            <IoIosLink />
                        </div>
                        {/* <div className="flex gap-x-2 items-center">
                            <div className="flex gap-x-2 text-sm items-center">
                                <div
                                    onClick={() => {
                                        setInputSearch(itemsFallowAndFollowing.login);
                                        setOpenModal({ ...openModal, type: 'followers' });
                                    }}
                                    className="cursor-pointer"
                                >
                                    <span className="font-medium">followers</span> .
                                </div>
                                <div
                                    onClick={() => {
                                        setInputSearch(itemsFallowAndFollowing.login);
                                        setOpenModal({ ...openModal, type: 'following' });
                                    }}
                                    className="cursor-pointer"
                                >
                                    <span className="font-medium">following</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        )
    }
}

export default UserFollowersAndFollowing
