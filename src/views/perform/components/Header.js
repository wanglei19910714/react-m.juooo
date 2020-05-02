import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                       
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >演出
                    </NavBar>

            </div>
        )
    }
}
