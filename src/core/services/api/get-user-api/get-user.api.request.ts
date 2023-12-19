/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'

const getUser = axiosRequestHandler((dataInput: any) => axiosInterceptor.get(`/users/${dataInput}`))

export default getUser
