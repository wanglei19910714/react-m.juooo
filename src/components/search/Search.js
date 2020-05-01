import React, { Component} from 'react'
import { SearchBar} from 'antd-mobile';
import {SearchContainer} from './Search.style'
export default class Search extends Component {
    state = {
        value: '',
      };
      
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
     
    render() {
      
        return (<SearchContainer>
            <SearchBar {...this.props}
              value={this.state.value}
              placeholder={this.props.placeholder}
              onSubmit={value => console.log(value, 'onSubmit')}
              onClear={value => console.log(value, 'onClear')}
              onFocus={() => console.log('onFocus')}
              onBlur={() => console.log('onBlur')}
              onCancel={() => console.log('onCancel')}
              showCancelButton
              onChange={this.onChange}
            />
          </SearchContainer>);
    }
}
