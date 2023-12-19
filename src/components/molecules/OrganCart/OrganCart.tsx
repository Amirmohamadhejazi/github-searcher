/* eslint-disable @next/next/no-img-element */
import React from 'react'

import type TOrganItems from './resources/types'

const OrganCart = ({ items }: TOrganItems) => {
    return (
        <div className='w-11 h-11 bg-gray-200 rounded-md p-1' key={items.id} title={items.login}>
            <img src={items.avatar_url} className='object-cover rounded-md' alt={items.login} />
        </div>
    )
}

export default OrganCart
