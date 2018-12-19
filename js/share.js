$(function() {

  var url11 = window.location.href;
  var curUrl =encodeURIComponent(window.location.href.split("#")[0]) ;
  var aurl = 'http://utility.fblife.com/weixin/common/get-sign?i=naoke&u='+curUrl;
  $.get(aurl,function(data){
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.data.appId, // 必填，公众号的唯一标识
        timestamp:data.data.timestamp , // 必填，生成签名的时间戳
        nonceStr:data.data.nonceStr, // 必填，生成签名的随机串
        signature: data.data.signature,// 必填，签名，见附录1
        jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
       ]// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });

    var title ="7年·用心陪伴",
        imgUrl = "http://h5.superracingplanet.com/images/ylan.png",
        des ="每一种陪伴，都用心对待";
    wx.ready(function(){
        //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        wx.onMenuShareTimeline({
            title: title, // 分享标题
            link: url11, //
            desc: des,
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        //获取“分享给朋友”按钮点击状态及自定义分享内容接口
        wx.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: des, // 分享描述
            link: url11, //
            imgUrl: imgUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

     });

  //success floor
  },"json")
  });
