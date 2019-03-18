import axios from "axios"

const instance = axios.create({
    baseURL: 'https://gank.io/api/data/',
    timeout: 5000,
});

instance.interceptors.request.use(function (config) {
    console.log("===========req ok start============")
    console.log(JSON.stringify(config || {}));
    return config;
}, function (error) {
    console.log("===========req error start============")
    console.log(JSON.stringify(error || {}));
    return Promise.reject(error)
})


instance.interceptors.response.use(function (response) {
    console.log("===========resp ok start============")
    console.log(JSON.stringify(response || {}))
    return response;
}, function (error) {
    console.log("===========resp error start============")
    console.log(JSON.stringify(error || {}))
    return Promise.reject(error)
})

export default instance