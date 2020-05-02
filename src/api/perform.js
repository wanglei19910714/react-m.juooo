import axios from  'axios'

export const getCategoryList = (params)=>{
    return axios.get('/api/Show/Index/getShowCategoryList?version=6.1.1&referer=2',{params})
}

export const getShowList = (params)=>{
 return axios.get('/api/Show/Search/getShowList?city_id=0&keywords=&venue_id=&start_time=&page=1&referer_type=&version=6.1.1&referer=2',{params})
}