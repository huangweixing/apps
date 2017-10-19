//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    customers: [
      {
        itemName:'xinlang',
        url: '../../images/images/xinlang.png'
      },
      {
        itemName:'tongrentang',
        url: '../../images/images/tongrentang.png'
      },
      {
        itemName:'wanda',
        url: '../../images/images/wanda.png'
      },
      {
        itemName:'xinfa',
        url: '../../images/images/xinfa.png'
      },
      {
        itemName:'taoxi',
        url: '../../images/images/taoxi.png'
      },
      {
        itemName:'fulian',
        url: '../../images/images/fulian.png'
      },
      {
        itemName:'jxshida',
        url: '../../images/images/jxshida.png'
      },
      {
        itemName:'twins',
        url: '../../images/images/twins.png'
      },
      {
        itemName:'kingroad',
        url: '../../images/images/kingroad.png'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
