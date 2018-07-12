var defaultcity,getweather,gettemp,getwind,getpic,city,weather,temp,wind

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that=this
    defaultcity='北京'
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=hEDUhZZdpRhysZQF1K6NXmYhrj1U3zpB&location='+defaultcity,
      success:function(res){
        getweather=res.data.results[0].weather_data[0].weather
        gettemp = res.data.results[0].weather_data[0].temperature
        getwind = res.data.results[0].weather_data[0].wind
        getpic = res.data.results[0].weather_data[0].dayPictureUrl
        that.setData({
          city:defaultcity,
          weather:getweather,
          temp:gettemp,
          wind:getwind,
          pic:getpic
        })
      }
    })
    
  },

  bindKeyInput:function(e){
    defaultcity=e.detail.value
  },

  search:function(e){
    var that =this
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=hEDUhZZdpRhysZQF1K6NXmYhrj1U3zpB&location=' + defaultcity,
      success: function (res) {
        getweather = res.data.results[0].weather_data[0].weather
        gettemp = res.data.results[0].weather_data[0].temperature
        getwind = res.data.results[0].weather_data[0].wind
        getpic = res.data.results[0].weather_data[0].dayPictureUrl
        that.setData({
          city: defaultcity,
          weather: getweather,
          temp: gettemp,
          wind: getwind,
          pic: getpic
        })
      }


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