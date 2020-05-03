import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                    rightContent={[
                       
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >演出
                    </NavBar>

            </div>
        )
    }
}
export default withRouter(Header)