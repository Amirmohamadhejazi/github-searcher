/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { TbArrowLeftTail } from 'react-icons/tb'
import { VscGithub } from 'react-icons/vsc'
import { StringParam, useQueryParams } from 'use-query-params'
import { TextInput } from '@mantine/core'

const GitContainer = ({
    children,
    searchSubmit,
    formRef
}: {
    children: React.ReactNode
    searchSubmit: any
    formRef: any
}) => {
    const [query, setQuery] = useQueryParams({
        search: StringParam
    })

    return (
        <div className='w-[90%] sm:w-auto lg:h-screen flex flex-col  container items-center mx-auto py-4  relative '>
            <div
                className={`absolute top-5  bg-sky-200 rounded-md  duration-500  flex items-center justify-center cursor-pointer ${
                    query.search ? 'visible opacity-100  right-5' : 'invisible opacity-0 right-0'
                }`}
                onClick={() => setQuery({ search: null })}
            >
                <TbArrowLeftTail className=' font-bold text-2xl m-1 duration-200' />
            </div>

            <div className='flex items-center gap-2 flex-wrap'>
                <VscGithub className='text-7xl font-medium' />
                <span className='text-2xl font-medium'>Github Status</span>
            </div>
            <form className=' w-full sm:w-auto' ref={formRef} onSubmit={searchSubmit}>
                <TextInput
                    type='text'
                    className='my-4'
                    placeholder='Enter User Name Github'
                    size='lg'
                    name='search'
                    withErrorStyles={false}
                    rightSection={
                        <div className='text-xl'>
                            <button type='submit'>
                                <IoSearch className='cursor-pointer' />
                            </button>
                        </div>
                    }
                />
            </form>
            <div className='w-full flex flex-grow shadow-md  p-2 sm:p-5  bg-slate-100 relative overflow-auto rounded-md'>
                {children}
            </div>
        </div>
    )
}

export default GitContainer
