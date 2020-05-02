import React, { Component } from 'react'
import Header from './components/Header'
import Swiper from './components/Swiper'
import Ad from './components/Ad'
import Vip from './components/Vip'
import HotShow from './components/HotShow'
import FloorShow from './components/FloorShow'
import BestList from './components/BestList'
import  './home.scss'
import {getClassifyHome,getVipList,getHotShowList,getFloorShowList,getBestList} from '../../../api/Home'
import { Toast} from 'antd-mobile';

import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)


export default class Index extends Component {
    constructor(){
        super()
        this.page = 1;
        this.isMore = true
        this.state = {
            classifyList:[],
            vipList:[],
            swiperList:[],
            hotShowList:[],
            floorShowList:[],
            bestList:[]
        }
    }


   async componentDidMount(){
        let ad =await getClassifyHome() 
        let vip = await getVipList()
        let hot = await getHotShowList()
        let floor = await getFloorShowList()
        let best  = await getBestList({page:this.page});

        
        
        this.setState({
            classifyList:ad.data.data.classify_list,
            vipList:vip.data.data.allList,
            swiperList:ad.data.data.slide_list,
            hotShowList:hot.data.data.hots_show_list,
            floorShowList:floor.data.data[2]['list'],
            bestList:this.formatBestList(best.data.data)
        })

        this.initScroll()
    }

    formatBestList(obj){
        let listCount = obj.list.length;
        let adListCount = obj.recommend_ad_list.length;
        if(listCount === 0 || adListCount === 0){
            return [...this.state.bestList,...obj.list];
        }
        let interval =Math.floor(listCount/adListCount);
        
        let temp = [];
        obj.list.forEach((item,index)=>{
            temp.push(item)
            

            if(index%interval === 0 && index !==0 && obj.recommend_ad_list.length!==0 ){
                temp.push(obj.recommend_ad_list[0])
                obj.recommend_ad_list.splice(0,1);
            }
        })

        return [...this.state.bestList,...temp];
    }

    initScroll(){
        this.bscroll = new BScroll('.scroll-wrapper', {
            scrollY: true,
            click: true,
            probeType: 3 ,
            scrollY: true,
            pullUpLoad: true
          })
          this.bscroll.on('pullingUp', this.pullingUpHandler.bind(this))  
    }
   async pullingUpHandler(){
        if(!this.isMore){
            Toast.info('没有更多数据了', 1);
            this.bscroll.finishPullUp()
            return;
        }
        this.page++
        let best  = await getBestList({page:this.page});
        if(best.data.data.list.length < 24) this.isMore=false 
        console.log(best);
        
        this.setState({
            bestList:this.formatBestList(best.data.data)
        },()=>{
            this.bscroll.finishPullUp()
            this.bscroll.refresh()
        })
         
       

    }

    render() {
        return (<div className="home-pages">
             <Header></Header>
             <div className="scroll-wrapper">
                <div className="scroll-content">
                    <Swiper list={this.state.swiperList}></Swiper>
                    <Ad  list={this.state.classifyList}></Ad>
                    <Vip list={this.state.vipList}></Vip>
                    <HotShow list={this.state.hotShowList}></HotShow>
                    <FloorShow list={this.state.floorShowList}></FloorShow>
                    <BestList list={this.state.bestList}></BestList>
                </div>
             </div>
          
          </div>);
    }
}
