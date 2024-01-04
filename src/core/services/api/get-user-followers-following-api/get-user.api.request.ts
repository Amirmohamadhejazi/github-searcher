import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

const getUserFollowersAndFollowing = axiosRequestHandler(
    ({ inputSearch, type, pageDataFollowersAndFollowing }: TCriticalAnyType) =>
        axiosInterceptor.get(`/users/${inputSearch}/${type}?page=${pageDataFollowersAndFollowing}`)
)

export default getUserFollowersAndFollowing
