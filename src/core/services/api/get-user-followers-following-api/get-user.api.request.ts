/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'

const getUserFollowersAndFollowing = axiosRequestHandler(({ inputSearch, type, pageDataFollowersAndFollowing }: any) =>
    axiosInterceptor.get(`/users/${inputSearch}/${type}?page=${pageDataFollowersAndFollowing}`)
)

export default getUserFollowersAndFollowing
