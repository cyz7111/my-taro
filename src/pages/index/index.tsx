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

  // function Content(props) {
  //   return (
  //     <div>哈哈哈</div>
  //   )
  // }

  render () {
    const hProps={
      left:'左',
      center:'中',
      right:'右'
    }
    return (
      <View className='index'>
        <Header {...hProps}></Header>
        <Text>我是首页</Text>
      </View>
    )
  }
}
