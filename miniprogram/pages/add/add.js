// pages/add/add.js
const db = wx.cloud.database()
const productsCollection = db.collection('test')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coursename:"",
    classroom:"",
    teacher:"",
    oddeven:'1',
    coursestart: 0,
    courseend: 0,
    courselength: "",
    week_start: 1,
    week_end: 16,
    week:0,
  },

  coursename:function(e){
    this.setData({
      coursename:e.detail
    })
  },

  classroom:function(e){
    this.setData({
      classroom:e.detail
    })
  },
  
  teacher:function(e){
    this.setData({
      teacher:e.detail
    })
  },

  week:function(e){
    this.setData({
      week:e.detail
    })
  },

  coursestart:function(e){
    this.setData({
      coursestart:e.detail
    })
  },

  courseend:function(e){
    this.setData({
      courseend:e.detail
    })
  },

  onChange(event) {
    this.setData({
      oddeven: event.detail
    });
  },

  onClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      oddeven: name
    });
  },

  
  addData: function(event){
    productsCollection.add({
      data:this.data
    }).then(res => {
      console.log(res)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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