import React from 'react'
import Component from '@/Component'
import classs from 'classnames'
import styles from './loan.scss'

class Loan extends Component {
  render() {
    return (
      <div className={styles.loan}>
        <div className={styles.body}>
          <div className={styles.item}>
            <div className={styles.title}>资金募集进度 (剩余资金额度 30000 USDT)</div>
            <div className={styles.rateBox}>
              <div className={styles.rate}><span style={{ width: '70%' }} /></div>
              <div className={styles.btn}>借给他</div>
            </div>
            <div className={styles.p}><span>总借款<b> 100000 USTD</b></span></div>
            <div className={styles.p}><span>借款时长 <b>100</b> 天</span></div>
            <div className={styles.p}><span>已抵押 <b> 20 BTC</b></span></div>
            <div className={styles.p}><span>借款年利率<b> 20% </b> </span></div>
            <div className={styles.p}><span>借款到期总利息<b> 5479 USTD</b> </span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loan
