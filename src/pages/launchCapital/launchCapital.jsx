import React from 'react'
import Component from '@/Component'
import classs from 'classnames'
import styles from './launchCapital.scss'

class LaunchCapital extends Component {
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
      <div className={styles.launchCapital}>
        <div className={styles.body}>
          <div className={styles.input}>
            <p>资金金额 (单位/USDT)</p>
            <input type="text" value={pic} onChange={this.change.bind(this, 'pic')} />
          </div>
          <div className={styles.input}>
            <p>资金期限 (单位/天)</p>
            <input type="text" value={time} onChange={this.change.bind(this, 'time')} />
          </div>
          <div className={styles.input}>
            <p>资金年利率 (单位/%)</p>
            <input type="text" value={rate} onChange={this.change.bind(this, 'rate')} />
          </div>
          <div className={styles.input}>
            <p>接受抵押币种 (目前只可填 BTC 或 ETH)</p>
            <input type="text" value={type} onChange={this.change.bind(this, 'type')} />
          </div>
          <div className={styles.btn}>发起资金</div>
        </div>
      </div>
    );
  }
}

export default LaunchCapital
