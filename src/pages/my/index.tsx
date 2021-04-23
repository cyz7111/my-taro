import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'


export default class My extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View>
        <Text className='iconfont icon-ziliao'>我是主页</Text>
        <Text className='my'>去登录</Text>
      </View>
    )
  }
}
