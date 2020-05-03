 import * as TYPES from '../action-types'

export default function city(state={currentCityId:0,cityName:"全国"},action){
    switch(action.type){
        case TYPES.CITY_UPDATE_CITYID:
            return {currentCityId:action.currentCityId,cityName:action.cityName}
        default:
            return state;
    }
}