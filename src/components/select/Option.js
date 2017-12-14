import React from 'react'

const Option = React.createClass({  
  propType:{
    disabled: React.PropTypes.bool.isRequired,
    key: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired
  },
  getDefaultProps: function(){
    return {
        disabled: 'true', // 是否禁用;默认可选 
        key:'默认选中', //和 value 含义一致。如果 React 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置
        title: 'selectTitle', //选中该 Option 后，Select 的 title
        value: 'selectedValue' //默认根据此属性值进行筛选
    }
  },
  getInitialState: function(){
    return { menuList:[] }
  },
  render() {
    const {disabled,title,value,key} = this.props
    console.log(value)
    return (
        <li>{value}</li>
    )
  }
})

export default Option  