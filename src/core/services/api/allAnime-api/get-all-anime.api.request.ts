import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'

const getAllAnimeQueryFn = axiosRequestHandler((config) => axiosInterceptor.get('/', config))

export default getAllAnimeQueryFn
