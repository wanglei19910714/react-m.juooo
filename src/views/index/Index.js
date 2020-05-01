import React from 'react'
import { TabBar } from 'antd-mobile';

import Home from './home/Home'
import Theatre from './theatre/Theatre'
import Eticket from './eticket/Index'
import Profile from './profile/Profile'

const tabList =[{
    id:"home",
    title:"首页",
    icon:"https://image.juooo.com/group1/M00/01/81/rAoKmVuQecmATGXZAAAUKcf_gA0402.png",
    comp:Home
    },
    {
        id:"theatre",
        title:"剧院",
        icon:"https://image.juooo.com/group1/M00/02/7F/rAoKNVwtUeGAOGfGAAAKR4Zrvs0487.png",
        comp:Theatre
    },
    {
        id:"eticket",
        title:"票夹",
        icon:"https://image.juooo.com/group1/M00/02/71/rAoKNVwRraqAMv3SAAAIdQJTBKA919.png",
        comp:Eticket
    },
    {
        id:"profile",
        title:"我的",
        icon:"https://image.juooo.com/group1/M00/01/81/rAoKmVuQedqADpfXAAAQDvkHt5o350.png",
        comp:Profile
    },
]
export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'home',
      hidden: false,
      tabList:tabList
    };
  }

  componentDidMount(){
    window.addEventListener('pageshow',this.handleShow.bind(this));
    
  }

  handleShow(){
    let selectedTab = this.props.location.pathname.split('/')[2];
    selectedTab = selectedTab ?  selectedTab : "home"
    this.setState({
      selectedTab
    })
  }

   

  render() {
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
            {tabList.map((item)=>{
             return   <TabBar.Item
                    title={item.title}
                    key={item.id}
                    icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.icon}) center 0px/  21px 42px no-repeat` }}
                    />
                    }
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.icon}) center -21px /  21px 42px no-repeat` }}
                    />
                    }
                    selected={this.state.selectedTab === item.id}
                   
                    onPress={() => {
                      console.log();
                      this.props.history.push(`/index/${item.id}`)
                      
                    this.setState({
                        selectedTab: item.id,
                    });
                    }}
                    data-seed="logId"
                >
                   <item.comp></item.comp>
                </TabBar.Item>
            })}
        
          
         
        </TabBar>
      </div>
    );
  }
}