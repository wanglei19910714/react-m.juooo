import axios from  'axios'

export const getClassifyHome =(params)=>{
    return axios.get('/api/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2',{params})
}
 

export const getVipList = (params)=>{
 return axios.get('/api/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2',{params})
}


export const getHotShowList = (params)=>{
  return axios.get('/api/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2',{params})
}

export const getFloorShowList = (params)=>{
  return axios.get('/api/home/index/getFloorShow?city_id=0&version=6.1.1&referer=2',{params})
}

export const getBestList = (params)=>{
  return axios.get('/api/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&referer_type=index&version=6.1.1&referer=2',{params})
}

 