/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

const getUserRepos = axiosRequestHandler(({ inputSearch, pageDataRepos, sortReposType }: TCriticalAnyType) =>
    axiosInterceptor.get(`/users/${inputSearch}/repos?page=${pageDataRepos}&sort=${sortReposType}`)
)

export default getUserRepos


// export const getUserRepos = async ({
//     inputSearch,
//     pageDataRepos,
//     sortReposType
// }: {
//     inputSearch: string;
//     pageDataRepos: number;
//     sortReposType: string;
// }) => {
//     try {
//         return axiosInterceptor.get(`/users/${inputSearch}/repos?page=${pageDataRepos}&sort=${sortReposType}`).then(
//             (res) => res.data
//         );
//     } catch (error: any) {
//         return error.response?.data;
//     }
// };