import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

const getUser = axiosRequestHandler((dataInput: TCriticalAnyType) => axiosInterceptor.get(`/users/${dataInput}`))

export default getUser
