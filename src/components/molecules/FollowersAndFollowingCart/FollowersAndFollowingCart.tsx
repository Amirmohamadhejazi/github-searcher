/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { IoIosLink } from 'react-icons/io'

import type TFallowAndFollowingItems from './resources/types'

const FollowersAndFollowingCart = ({
    itemsFallowAndFollowing,
    setModalAvatar,
    setOpenModal
}: TFallowAndFollowingItems) => {
    const router = useRouter()

    return (
        <div className='bg-gray-300 p-2 rounded-md flex items-center justify-between' key={itemsFallowAndFollowing.id}>
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
                        <img src={itemsFallowAndFollowing.avatar_url} className='w-full h-full object-cover' alt='' />
                    </div>
                </div>
                <span className=' font-semibold'>{itemsFallowAndFollowing.login}</span>
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
        </div>
    )
}

export default FollowersAndFollowingCart
