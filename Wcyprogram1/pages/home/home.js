// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Coderwcy:'World',
    age:23,
    student:[
      {id:110,name: 'mike one',age:12},
      {id:111,name: 'mike two',age:13},
      {id:112,name: 'mike three',age:14}
    ],
    counter:0
  },
  handleBtnClick(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter -1
    })
  }
})
