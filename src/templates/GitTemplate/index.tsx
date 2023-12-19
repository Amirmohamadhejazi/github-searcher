/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useRef } from 'react'
import { NumberParam, StringParam, useQueryParams } from 'use-query-params'

import SearchUserOrganisms from '@organisms/SearchUserOrganisms'

const GitTemplate = () => {
    const formRef = useRef<any>(null)
    const [, setQuery] = useQueryParams({
        pageRepository: NumberParam,
        reposType: StringParam,
        search: StringParam
    })
    const searchSubmit = (e: any) => {
        e.preventDefault()
        const dataInput: any = Object.fromEntries(new FormData(formRef.current).entries()).search
        if (dataInput.trim().length !== 0) {
            setQuery({ search: dataInput, reposType: undefined, pageRepository: undefined })
        }
    }

    return <SearchUserOrganisms searchSubmit={searchSubmit} formRef={formRef} />
}

export { GitTemplate }
