/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'

const getUserRepos = axiosRequestHandler(({ inputSearch, pageDataRepos, sortReposType }: any) =>
    axiosInterceptor.get(`/users/${inputSearch}/repos?page=${pageDataRepos}&sort=${sortReposType}`)
)

export default getUserRepos

// export const githubApiGetUserFollowersAndFollowing = async ({
//     inputSearch,
//     type,
//     pageDataFollowersAndFollowing
// }: {
//     inputSearch: string
//     type: string
//     pageDataFollowersAndFollowing: number
// }) => {
//     Http.defaults.baseURL = 'https://api.github.com'
//     try {
//         return Http.get(`/users/${inputSearch}/${type}?page=${pageDataFollowersAndFollowing}`).then((res) => res.data)
//     } catch (error: any) {
//         return error.response?.data
//     }
// }
