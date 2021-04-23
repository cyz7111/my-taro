//全局配置
export default {
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/car/index'
  ],
  tabBar: {
    color:'black',
    selectedColor:'#1296db',
    backgroundColor:'#CDCEFA',
    list:[
      {
        pagePath:'pages/index/index',
        text:'首页',
        iconPath:'./assets/images/index.png',
        selectedIconPath:'./assets/images/index-select.png'
      },
      {
        pagePath:'pages/car/index',
        text:'购物车',
        iconPath:'./assets/images/car.png',
        selectedIconPath:'./assets/images/car-select.png'
      },
      {
        pagePath:'pages/my/index',
        text:'我的',
        iconPath:'./assets/images/my.png',
        selectedIconPath:'./assets/images/my-select.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',//下拉 loading 的样式，仅支持 dark / light
    navigationBarBackgroundColor: '#fff',//导航栏背景颜色
    navigationBarTitleText: 'WeChat',//导航栏标题文字内容
    navigationBarTextStyle: 'black'//导航栏标题颜色，仅支持 black / white
  },
  // usingComponents: {
  //   'van-button': '../../components/vant-weapp/dist/button/index'
  // }
}
