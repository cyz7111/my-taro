import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class My extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='my'>
        <Text>Hello world my!</Text>
      </View>
    )
  }
}
