import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Header from '../../components/hearder/index'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Header></Header>
        <Text>我是首页</Text>
      </View>
    )
  }
}
