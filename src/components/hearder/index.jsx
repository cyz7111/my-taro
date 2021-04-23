import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

export default class Header extends Component {
  render() {
    return (
      <View className='header-box'>
        <View className='header-left'>左</View>
        <View className='header-center'>中</View>
        <View className='header-right'>右</View>
      </View>
    )
  }
}