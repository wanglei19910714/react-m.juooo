import React, { Component } from 'react'
import Header from './components/Header'
import Primary from './components/Primary'
import Content from './components/Content'
import {getDetailInfo} from '../../api/detail'
import './detail.scss'
export default class detail extends Component {
    constructor(){
        super();
        this.state = {
          detailInfo:{},
          isShowCity:"city_hidden"
        }
      }

        // 城市列表显示与隐藏
  isShowCity = ()=>{
    this.setState({
      isShowCity: this.state.isShowCity === 'city_hidden' ? 'city_show' : 'city_hidden'
    })
   }
      
      async  componentDidMount(){
        let schedular_id = this.props.match.params.schedular_id  
        let detail = await getDetailInfo({schedular_id})
      
        
        this.setState({
          detailInfo:detail.data.data
        })
       
       
       
      }
    render() {
        return (
            <div className="detail-pages">
                <button onClick={this.isShowCity}>按钮</button>
                <div className="content-header">
                    <div className="bgImg"><img  src="https://image.juooo.com/group1/M00/04/3D/rAoKNV54aAaAFt9MAABSgrHvRdw160.jpg"/></div>
                    <Header></Header>
                    <Primary></Primary>
                </div>
                <Content detailInfo={this.state.detailInfo}></Content>

                <div className="bottom_bar">
                       底部

                       <div className={`dialog  ${this.state.isShowCity}`}>
                    
                    </div>
                </div>


               
            </div>
        )
    }
}
