import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'

const getAllExamplesQueryFn = axiosRequestHandler(() =>
    axiosInterceptor.post('/', {
        query: `
        {
        Page {
        media {
            siteUrl
            title {
            english
            native
            }
            description
            coverImage {
            large
            }
            id
        }
        }
        }`
    })
)
export default getAllExamplesQueryFn
