import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Cat extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='cat'>
        <Text>我是购物车</Text>
      </View>
    )
  }
}
