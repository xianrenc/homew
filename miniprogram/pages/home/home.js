// pages/home/home.js
var util = require("../../utils/util.js")
const db = wx.cloud.database();
const productsCollection = db.collection('test')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeks:["","星期一","星期二","星期三","星期四","星期五","星期六","星期日"]
  },
  
  bindPickerChange: function (e) {
    this.setData({
      week: e.detail.value
    })
    productsCollection.where({
      week: String(this.data.week)
    }).get().then(res => {
      //console.log(res.data);
      this.setData({
        timetable: res.data
      })
    })
  },

  navigateTotimetable:function(event){
   wx.navigateTo({
     url: '../getTimetable/getTimetable',
   })
  },
  navigateToAdd:function(event){
    wx.navigateTo({
      url: '../add/add',
    })
  },

  navigateToIndex: function (event) {
    wx.navigateTo({
      url: '../index/index',
    })
  },

  navigateToComplex: function(event) {
    wx.navigateTo({
      url: '../complex/complex',
    })
  },
  
 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let time = util.formatDate(new Date());
    let week = util.getDates(1, time);
    console.log(week)
    this.setData({
      week:week
    })
    productsCollection.where({
      week:String(week)
    }).get().then(res => {
      //console.log(res.data);
      this.setData({
        timetable: res.data
      })
    })
   
 


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})