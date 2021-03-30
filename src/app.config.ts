export default {
  pages: [
    'pages/index/index',
    'pages/my/index'
  ],
  tabBar: {
    color:'yellow',
    selectedColor:'red',
    list:[
      {
        pagePath:'pages/index/index',
        text:'首页',
        iconPath:'./assets/images/tab-icon.png',
        selectedIconPath:'./assets/images/tab-icon.png'
      },
      {
        pagePath:'pages/my/index',
        text:'我的',
        iconPath:'./assets/images/tab-icon2.png',
        selectedIconPath:'./assets/images/tab-icon2.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
