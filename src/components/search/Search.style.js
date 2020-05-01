import styled from 'styled-components'

const SearchContainer = styled.div`
    .am-search{
      
        width:${(props)=>{
            console.log(999,props.children.props.width);
            
            return props.children.props.width;
        }};
        height:.3rem;
        background-color:#FFF;
        .am-search-input{
        border-radius:.14rem;
        background-color:#F5F5F5;
        .am-search-synthetic-ph{
            padding:0 .1rem;
          
            text-align:left;
        }
    }
    }
   
`


export {SearchContainer}