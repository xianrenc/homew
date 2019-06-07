// miniprogram/pages/teachertable/teachertable.js
const db = wx.cloud.database();
const tableCollection = db.collection('Timetable')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    week: 13,
    array: ["假期","第1周", "第2周", "第3周", "第4周", "第5周", "第6周", "第7周", "第8周", "第9周", "第10周", "第11周", "第12周", "第13周", "第14周", "第15周", "第16周"],
    dateArrays: ["05/27", "05/28", "05/29", "05/30", "05/31", "06/01", "06/02"],
    weekArrays: [{
        week: "周一",
        date: "05/27"
      },
      {
        week: "周二",
        date: "05/28"
      },
      {
        week: "周三",
        date: "05/29"
      },
      {
        week: "周四",
        date: "05/30"
      },
      {
        week: "周五",
        date: "05/31"
      },
      {
        week: "周六",
        date: "06/01"
      },
      {
        week: "周日",
        date: "06/02"
      }
    ],
    numberArrays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD", "#919191"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getStorage({
      key: 'teacher',
      success: function(res) {
        
        tableCollection.where({
          teacher:db.RegExp({
            regexp:res.data
          }) 
        }).get().then(res => {
          console.log(res.data)
          that.setData({
            timetable: res.data
          })
        })
        
      },
    })

  },

  bindPickerChange: function(e) {
    this.setData({
      week: e.detail.value
    })
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