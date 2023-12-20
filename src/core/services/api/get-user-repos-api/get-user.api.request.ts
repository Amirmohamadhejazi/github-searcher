/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

const getUserRepos = axiosRequestHandler(({ inputSearch, pageDataRepos, sortReposType }: TCriticalAnyType) =>
    axiosInterceptor.get(`/users/${inputSearch}/repos?page=${pageDataRepos}&sort=${sortReposType}`)
)

export default getUserRepos
