/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef } from 'react'
import { NumberParam, StringParam, useQueryParams } from 'use-query-params'

import SearchUserOrganisms from '@organisms/SearchUserOrganisms'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

const GitTemplate = () => {
    const formRef = useRef<TCriticalAnyType>(null)
    const [, setQuery] = useQueryParams({
        pageRepository: NumberParam,
        reposType: StringParam,
        search: StringParam
    })
    const searchSubmit = (e: TCriticalAnyType) => {
        e.preventDefault()
        const dataInput: TCriticalAnyType = Object.fromEntries(new FormData(formRef.current).entries()).search
        if (dataInput.trim().length !== 0) {
            setQuery({ search: dataInput, reposType: undefined, pageRepository: undefined })
        }
    }

    return <SearchUserOrganisms searchSubmit={searchSubmit} formRef={formRef} />
}

export { GitTemplate }
