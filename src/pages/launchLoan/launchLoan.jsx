import React from 'react'
import Component from '@/Component'
import classs from 'classnames'
import styles from './launchLoan.scss'

class LaunchLoan extends Component {
  state = {
    pic: 5000,
    time: 100,
    rate: 10,
    type: 'BTC',
    typeNum: 1
  }

  change (name, e) {
    this.setState({ [name]: e.target.value })
  }

  btn () {
    const { pic, time, rate, typeNum} = this.state
    // console.log(window.oumuamua)
    // 发起借款
    const resp = window.oumuamua.createBorrow(pic, 1, time, typeNum, 2, rate * 100)
    console.log(resp, 'resp');
  }

  render() {
    const { pic, time, rate, type, typeNum } = this.state
    return (
      <div className={styles.launchLoan}>
        <div className={styles.body}>
          <div className={styles.input}>
            <p>借款金额 (单位/USDT)</p>
            <input type="text" value={pic} onChange={this.change.bind(this, 'pic')} />
          </div>
          <div className={styles.input}>
            <p>借款期限 (单位/天)</p>
            <input type="text" value={time} onChange={this.change.bind(this, 'time')} />
          </div>
          <div className={styles.input}>
            <p>借款年利率 (单位/%)</p>
            <input type="text" value={rate} onChange={this.change.bind(this, 'rate')} />
          </div>
          <div className={styles.input}>
            <p>抵押币种 (目前只可填 BTC 或 ETH)</p>
            <input type="text" value={type} onChange={this.change.bind(this, 'type')} />
          </div>
          <div className={styles.input}>
            <p>抵押币种的个数</p>
            <input type="text" value={typeNum} onChange={this.change.bind(this, 'typeNum')} />
          </div>
          <div className={styles.btn} onClick={this.btn.bind(this)}>发起借款</div>
        </div>
      </div>
    );
  }
}

export default LaunchLoan
