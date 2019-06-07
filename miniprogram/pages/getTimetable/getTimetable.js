// miniprogram/pages/getTimetable/getTimetable.js
import Toast from 'vant-weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl:"http://elite.nju.edu.cn/jiaowu/ValidateCode.jsp",
    username:"",
    password:"",
    code:"",     
  },

  onClickIcon: function(e) {
    Toast('用户名为学号，初始密码为录取号的后6位（或学号）。 ');
  },

  addData: function(e) {
    //console.log(this.data.username+" "+this.data.password+" "+this.data.code)
    wx.navigateTo({
      url: '../timetable/timetable',
    })
    /** 
    wx.cloud.callFunction({
      name:"getTimetable"
    }).then(res=>{
      console.log(res)
    })
    */
  },

  inputname:function(e) {
    //console.log(e.detail)
    var that=this;
    that.setData({
      username:e.detail
    })
  },

  inputpassword:function(e){
    var that =this;
    that.setData({
      password:e.detail
    })
  },

  inputcode:function(e){
    var that=this;
    that.setData({
      code:e.detail
    })
  },


/**
 * 生命周期函数--监听页面加载
 */
onLoad: function(options) {

},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {

},

/**
 * 生命周期函数--监听页面显示
 */
onShow: function() {

},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function() {

},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function() {

},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

}
})