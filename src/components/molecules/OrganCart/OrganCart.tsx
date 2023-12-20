/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import type TOrganItems from './resources/types'

const OrganCart = ({ items }: TOrganItems) => {
    return (
        <Link href={`https://github.com/${items.login}`} target='_blank'>
            <div className='w-11 h-11 bg-gray-200 rounded-md p-1' key={items.id} title={items.login}>
                <img src={items.avatar_url} className='object-cover rounded-md' alt={items.login} />
            </div>
        </Link>
    )
}

export default OrganCart
