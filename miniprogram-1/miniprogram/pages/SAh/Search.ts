// pages/Search.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [1, 2, 3, 4, 5],
    Signal: ["#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8",      '#e8f3f8'],
    GiC: ['FFFF000102079310', 'FFFF000102066589', 'FFFF000102072616', 'FFFF000102048235', 'FFFF000102078843', "FFFF000102088403", "FFFF000102078839", "FFFF000102078889"],
      },

  /**
   * 生命周期函数--监听页面加载
   */
  // getON: function(Choice: any, GIC: any) {
  //   var that = this;
  //   var SignalTep = ["#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8"];
  //   wx.request({
  //     url: "http://wx.99cda.com/cda-wx/chargingBike.do",
  //     data: {
  //       GID: GIC,
  //       openId: 'ozCzC0nprh9LTgIV6G2Y8Fyc3R9c',
  //     },
  //     method: 'GET',
  //     success: (res) => {
  //       var str=res.data.toString();
  //       var Template = /(?<="channelStatus":")((\S|\s)+?)+?(?=","chargedQuantity")/g;
  //       var array = str.match(Template);
  //       if (array != null && array.length > 0){
  //         for (var i = 0; i < array.length; i++){
  //           if (array[i] === "C"){
  //             SignalTep[i] =  "crimson";
  //           }
  //           else{
  //             SignalTep[i] = "chartreuse";
  //           }
  //         }
  //       }
  //       switch (Choice) {
  //         case 0:
  //           that.setData({
  //             Signal : SignalTep
  //           });
  //           break;

  //           case 1:
  //             that.setData({
  //               Signalp : SignalTep
  //             });
  //             break;

  //           case 2:
  //           that.setData({
  //             Signalpp : SignalTep
  //           });
  //           break;

  //           case 3:
  //             that.setData({
  //               Signalppp : SignalTep
  //             });
  //             break;
  //       }
  //       // console.log(str);
  //       console.log(array[0].length);
  //       // console.log(array[0]==="C");

  //     }
  //   })
  // },
  getON: function(Choice: any, GIC: any) {
    var that = this;
    var SignalTep = ["#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8", "#e8f3f8"];
    wx.cloud.callFunction({
      name:"sendHttp",

      data:{
        url:'http://wx.99cda.com/cda-wx/chargingBike.do',
        method: 'POST',
        data0: {
          GID: GIC,
          openId: 'ozCzC0nprh9LTgIV6G2Y8Fyc3R9c',
        }
      }

    }).then(res => {
        var str=res.result.toString();
        console.log(str)
        var Template = /(?<="channelStatus":")((\S|\s)+?)+?(?=","chargedQuantity")/g;
        var array = str.match(Template);
        if (array != null && array.length > 0){
          for (var i = 0; i < array.length; i++){
            if (array[i] === "C"){
              SignalTep[i] =  "crimson";
            }
            else{
              SignalTep[i] = "chartreuse";
            }
          }
        }
        switch (Choice) {
          case 0:
            that.setData({
              Signal : SignalTep
            });
            break;

            case 1:
              that.setData({
                Signalp : SignalTep
              });
              break;

            case 2:
            that.setData({
              Signalpp : SignalTep
            });
            break;

            case 3:
              that.setData({
                Signalppp : SignalTep
              });
              break;


              
              case 4:
            that.setData({
              Signalppppp : SignalTep
            });
            break;

              case 5:
                that.setData({
                  Signalpppppp : SignalTep
                });
                break;

              case 6:
              that.setData({
                Signalppppppp : SignalTep
              });
              break;

              case 7:
                that.setData({
                  Signalppppppppp : SignalTep
                });
                break;
        }
        // console.log(str);
        console.log(array[0].length);
        // console.log(array[0]==="C");

      }
    )
  },

  onLoad: function() {
    for (var J = 0; J < this.data.GiC.length; J++){
      this.getON(J, this.data.GiC[J]);
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  onRefresh:function(){
    //导航条加载动画
    wx.showNavigationBarLoading()
    //loading 提示框
    wx.showLoading({
      title: 'Loading...',
    })
    console.log("下拉刷新啦");
    setTimeout(function () {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
    }, 800)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.onRefresh();
    this.onLoad();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})