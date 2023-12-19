/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'

const getUserOrgan = axiosRequestHandler((dataInput: any) => axiosInterceptor.get(`/users/${dataInput}/orgs`))

export default getUserOrgan
