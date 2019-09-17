import React from 'react'
import Component from '@/Component'
import classs from 'classnames'
import styles from './launchLoan.scss'

class LaunchLoan extends Component {
  state = {
    pic: '',
    time: '',
    rate: '',
    type: ''
  }

  change (name, e) {
    this.setState({ [name]: e.target.value })
  }

  render() {
    const { pic, time, rate, type } = this.state
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
          <div className={styles.btn}>发起借款</div>
        </div>
      </div>
    );
  }
}

export default LaunchLoan
