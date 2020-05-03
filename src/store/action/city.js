import * as TYPES from '../action-types'

let  city = {
    updateCityId(currentCityId,cityName){
        return {type:TYPES.CITY_UPDATE_CITYID,currentCityId,cityName}
    }
}

export default city