import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

export default class Header extends Component {
  render() {
    return (
      <View className='header-box'>
        <View className='header-left'>{this.props.left}</View>
        <View className='header-center'>{this.props.center}</View>
        <View className='header-right'>{this.props.right}</View>
      </View>
    )
  }
}