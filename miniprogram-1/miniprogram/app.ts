// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    wx.cloud.init({
      env: "jason-v5-7grln4zk6a8b76b4"
    });
    // wx.cloud.callFunction({
    //   name:"sendHttp",

    //   data:{
    //     url:'http://wx.99cda.com/cda-wx/chargingBike.do',
    //     method: 'POST',
    //     data0: {
    //       GID: 'FFFF000102079310',
    //       openId: 'ozCzC0nprh9LTgIV6G2Y8Fyc3R9c',
    //     }
    //   }

    // }).then(res=>{
    //   console.log(res.result);

    // })
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})