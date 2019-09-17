import React from 'react'
import Component from '@/Component'
import classs from 'classnames'
import styles from './capital.scss'

class Capital extends Component {
  render() {
    return (
      <div className={styles.loan}>
        <div className={styles.body}>
          <div className={styles.item}>
            <div className={styles.title}>剩余资金额度 200000 USDT</div>
            <div className={styles.rateBox}>
              <div className={styles.rate}><span style={{ width: '80%' }} /></div>
              <div className={styles.btn}>借款</div>
            </div>
            <div className={styles.p}><span>资金总额<b> 1000000 USTD</b></span></div>
            <div className={styles.p}>接受抵押物 <b>BTC</b></div>
            <div className={styles.p}><span>资金到期时间 <b>2020-10-10</b></span></div>
            <div className={styles.p}><span>资金年利率<b> 30% </b> </span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Capital
