/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

const getUserOrgan = axiosRequestHandler((dataInput: TCriticalAnyType) =>
    axiosInterceptor.get(`/users/${dataInput}/orgs`)
)

export default getUserOrgan
