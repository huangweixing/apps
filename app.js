//app.js
App({
  data: {
    
  },
  calling:function(){
      wx.makePhoneCall({
        phoneNumber: '18679088888',
        success:function(){
          console.log("拨打电话成功！")
        },
        fail:function(){
          console.log("拨打电话失败！")
        }
      })
  },
})
