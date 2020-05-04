import axios from  'axios'

export const getDetailInfo =(params)=>{
    return axios.get('/api/Schedule/Schedule/getScheduleInfo?schedular_id=110379&version=6.1.1&referer=2',{params})
}
 