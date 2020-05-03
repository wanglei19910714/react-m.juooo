import React, { Component } from 'react'
import {getCityList} from '../../../api/perform'
import BScroll from '@better-scroll/core'
import {connect} from 'react-redux'
import action from '../../../store/action'

class City extends Component {
    constructor(){
        super();
        this.state = {
          cityList:[],
          activeCity:{cityId:0,cityName:"全国"}
        }
      }
    
      async  componentDidMount(){
        let city = await getCityList()
        this.setState({
          cityList:[{id:0,name:"全国"},...city.data.data.city_list],
          activeCity:{cityId:this.props.currentCityId,cityName:this.props.currentCityId}
        })
    
        this.initScroll()
      }

      initScroll(){
        this.bscroll = new BScroll('.list-scroll-wrapper', {
            scrollY: true,
            click: true,
            probeType: 3 
          })
      }

      updateActiveId(id,name){
        this.setState({
            activeCity:{cityId:id,cityName:name}
          })
      }

      updateCurrentCity=()=>{
        let {cityId,cityName}   = this.state.activeCity
        this.props.updateCityId(cityId,cityName)
        this.props.isShowCity()
        this.props.updateShowList(0,cityId)
      }
    
    render() {
        return (
            <div className="city-wrapper">
                <div className="city-left">

                </div>
                <div className="city-right">
                    <h1>城市</h1>
                   
                        <div className="list-scroll-wrapper">
                            <ul>
                                {this.state.cityList.map((item)=>{
                                return   <li key={item.id} 
                                className={this.state.activeCity.cityId*1 === item.id*1 ? "active":""}
                                onClick= {this.updateActiveId.bind(this,item.id,item.name)}
                                >
                                    {item.name}
                                    </li>
                                })}
                            </ul>
                        </div>
                    
                    
                    <div className="foot">
                        <div className="reset" >重置</div>
                        <div className="sure" onClick={this.updateCurrentCity}>确定</div>
                </div>
            </div>
            </div>
        )
    }
}

export default connect(state=>state.city,action.city)(City)