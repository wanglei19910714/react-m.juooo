import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';

export default class Swiper extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 140,
      }
    render() {
        return (
            <div className="swiper-wrapper">
                  {this.props.list.length === 0 ? '' :  <Carousel
          autoplay={true}
          infinite
          
        >
          {this.props.list.map((item,index) => (
            <a
              key={index}
              href="/test"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={item.image_url}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>}
            </div>
        )
    }
}
