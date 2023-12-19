/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link'
import { IoPlayOutline } from 'react-icons/io5'

const CartMovie = ({ data }: any) => {
    return (
        <div className='flex flex-col rounded-md   shadow-xl ' key={data.id}>
            <div className='max-h-52 relative'>
                <img src={data.coverImage.large} className='w-full h-full object-cover  rounded-md ' alt='' />
                <Link href={data.siteUrl} target='_blank'>
                    <div className='flex items-center justify-center absolute rotate-45 -right-1 -bottom-5 p-2 bg-green-200 text-black rounded-md z-50'>
                        <div className='-rotate-45'>
                            <IoPlayOutline className='text-xl' />
                        </div>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col m-6'>
                <span className='truncate text-sm font-semibold' title={data.title.english}>
                    {data.title.english}
                </span>
                <span className='truncate text-sm font-semibold' title={data.title.english}>
                    {data.description}
                </span>
            </div>
        </div>
    )
}

export default CartMovie
