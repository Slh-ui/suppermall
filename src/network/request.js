import axios from 'axios'

export function request(config) {
    // 1、封装接口
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.1axios拦截器
    instance.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err)
    })

    // 2.2 响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })

    //3、发送真正网络请求
    return instance(config)
}
