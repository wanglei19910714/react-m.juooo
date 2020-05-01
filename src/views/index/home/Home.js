import React, { Component } from 'react'
import Header from './components/Header'
import Swiper from './components/Swiper'
import Ad from './components/Ad'
import Vip from './components/Vip'
import HotShow from './components/HotShow'
import FloorShow from './components/FloorShow'
import  './home.scss'
import {getClassifyHome,getVipList,getHotShowList,getFloorShowList} from '../../../api/Home'
// import BScroll from '@better-scroll/core'

export default class Index extends Component {
    constructor(){
        super()
        this.state = {
            classifyList:[],
            vipList:[],
            swiperList:[],
            hotShowList:[],
            floorShowList:[]
        }
    }


   async componentDidMount(){
        let ad =await getClassifyHome() 
        let vip = await getVipList()
        let hot = await getHotShowList()
        let floor = await getFloorShowList()

        this.setState({
            classifyList:ad.data.data.classify_list,
            vipList:vip.data.data.allList,
            swiperList:ad.data.data.slide_list,
            hotShowList:hot.data.data.hots_show_list,
            floorShowList:floor.data.data[2]['list'],
        })
    }
    render() {
        return (<div>
             <Header></Header>
             <Swiper list={this.state.swiperList}></Swiper>
             <Ad  list={this.state.classifyList}></Ad>
             <Vip list={this.state.vipList}></Vip>
             <HotShow list={this.state.hotShowList}></HotShow>
             <FloorShow list={this.state.floorShowList}></FloorShow>
          </div>);
    }
}
