Page({
  data: {
    showOneButtonDialog1: false,
      showOneButtonDialog: false,
      buttons: [{text: '取消'}, {text: '确定'}],
      oneButton: [{text: '确定'}],
  },
  openConfirm: function () {
      this.setData({
        showOneButtonDialog1: true
      })
  },
  tapDialogButton(e) {
      this.setData({
        showOneButtonDialog1: false,
          showOneButtonDialog: false
      })
  },
  tapOneDialogButton(e) {
      this.setData({
          showOneButtonDialog: true
      })
  }
});