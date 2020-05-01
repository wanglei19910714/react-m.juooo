import axios from 'axios'

const get = (url,params)=>{
    return axios.get(url,{params})
}

const post = (url,data)=>{
    return axios.post(url,data)
}


export {get,post}