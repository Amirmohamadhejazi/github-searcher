/* eslint-disable @next/next/no-img-element */
'use client'
// import { githubApiGetUserOrgan } from '@/core/service/api';
import { useQuery } from '@tanstack/react-query'

import OrganCart from '@molecules/OrganCart/OrganCart'

import { getUserOrgan } from '@core/services/api/get-user-organ-api'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

const OrgansUser = ({ inputSearch }: { inputSearch: TCriticalAnyType }) => {
    const { isSuccess, data }: TCriticalAnyType = useQuery({
        queryKey: ['searchUserOrganQuery', { inputSearch }],
        queryFn: () => inputSearch && getUserOrgan(inputSearch),
        retry: 1,
        retryOnMount: false,
        staleTime: 1200
    })

    if (isSuccess && data?.data?.length > 0) {
        return (
            <div className='flex flex-col mb-3'>
                <hr className='my-2' />
                <span className='font-semibold text-sm mb-3'>organizations</span>
                <div className='flex gap-2 flex-wrap'>
                    {data?.data.map((items: TCriticalAnyType) => <OrganCart items={items} key={items.id} />)}
                </div>
            </div>
        )
    }
}

export default OrgansUser
