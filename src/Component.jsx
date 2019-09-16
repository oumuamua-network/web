import { Component } from 'react'
import ajax from 'ajax'
import Global from 'Global'
import { Math } from 'core-js';

class IOComponent extends Component {
  emit (...rest) {
    Global.emit(...rest)
  }

  on (...rest) {
    Global.on(...rest)
  }

  off (...rest) {
    Global.off(...rest)
  }

  ajax (...rest) {
    ajax(...rest)
  }

  toast(message, type, time) {
    this.emit('toast', message, type, time)
  }

  getDay (times) {
    const date = new Date(times)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}-${month > 9 ? month : '0' + month}-${day > 9 ? day : '0' + day}`
  }

  openDialog(...rest) {
    console.log(1231)
    this.emit('dialog', ...rest)
  }

  getCycle (index) {
    // index ["历史", "日", "周", "月", "季度", "年"]
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    let week = date.getDay()
    week = week ? week : 7

    switch(index) {
      case 1:
        return `${year}年${month}月${day}日`
      case 2:
        return `${this.getToday(Date.now() - 86400000 * (week - 1))}(周一) 至 ${this.getToday(Date.now() + 86400000 * (7 - week))}(周日)`
      case 3:
        return `${year}年${month}月`
      case 4:
        return `${year}年第${[null, '一', '二', '三', '四'][window.Math.ceil(month / 3)]}季度`
      case 5:
        return `${year}年`
      default:
        return "公司历史"
    }
  }
  // 这里还可以放一些全局的东西  所有页面组件都继承这个组件开发。
}

export default IOComponent
