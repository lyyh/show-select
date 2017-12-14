import React, { Component } from 'react'
import propTypes from 'prop-types'

const SSelect = React.createClass({
    render(){
        return <div>
        {this.children}
        </div>
    }
})

SSelect.propTypes = {
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType(React.PropTypes.string, React.PropTypes.array),//默认值
    mode: React.PropTypes.oneOf(['multiple', 'combobox']),//多选还是单选，多选要增加全部和清楚选项
    value: React.PropTypes.array.isRequired,//选中值
    onSelect: React.PropTypes.function,//function(value, option)
    onDselect:React.PropTypes.function,//function(Option)
    placeholder:React.PropTypes.string,
    //回车默认选中第一个 回车选中未选中的第一个
    onSearch:React.PropTypes.function,//function(upvalue,nowValue)
    onFilter:React.PropTypes.function//function(option,searchText) 输入文本框变化时
}

const SOption = React.createClass({
    propTypes: {
        disabled: React.PropTypes.boolean.isRequired,//false
        key: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired
    }
})

export default SSelect