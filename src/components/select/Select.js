import React from 'react'
import './Select.less'
const Select = React.createClass({  
  propType:{
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]),//默认值
    mode: React.PropTypes.oneOf(['multiple', 'combobox']),//多选还是单选，多选要增加全部和清楚选项
    value: React.PropTypes.array.isRequired,//选中值
    onSelect: React.PropTypes.function,//function(value, option)
    onDselect:React.PropTypes.function,//function(Option)
    placeholder:React.PropTypes.string,
    //回车默认选中第一个 回车选中未选中的第一个
    onSearch:React.PropTypes.function,//function(upvalue,nowValue)
    onFilter:React.PropTypes.function//function(option,searchText) 输入文本框变化时
  },
  getDefaultProps: function(){
    return {
        name: 'name',
        defaultValue:'默认选中',
        mode: 'combobox', //默认单选
        value: 'selectedValue',
        placeholder: 'placeholder'
    }
  },
  getInitialState: function(){
    return { menuList:[] }
  },
  onSelect:function(value,option){

  },
  onDselect:function(option){

  },
  onSearch:function(oldValue,newValue){

  },
  onFilter:function(option,searchTex){

  },
  render() {
    return (
    <div className='select-wrapper select-enabled'>
        <div className='select-inner' role='combobox'>
            <div className='select-content'>
                <div className='select-value' title='1'>123</div>
            </div>
        </div>
      <ul>
         {this.props.children}
      </ul>
    </div>
    );
  }
})

export default Select  