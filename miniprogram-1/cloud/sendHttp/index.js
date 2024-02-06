// 云函数入口文件
const cloud = require('wx-server-sdk');
const got = require('got'); //引用 got
// var request = require('request-promise');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  // var url=event.url;
  var url="http://wx.99cda.com/cda-wx/chargingBike.do?q=0400000000013985&qType=device&openId=ozCzC0nprh9LTgIV6G2Y8Fyc3R9c";
  var URL=event.url;
  var DATA=event.data0;
  URL = URL + '?GID=' + DATA.GID + '&openId=' + DATA.openId ;

  let Resp = await got(URL, {
    method: 'POST', //post请求

    headers: {
      'Content-Type': 'application/json'
    },

  });
  // const RESP = await cloud.httpRequest({
  //   url,
  //   method: 'POST',
  // })

  return Resp.body //返回数据

}