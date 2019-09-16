import React from 'react'
import Component from '@/Component'
import classs from 'classnames'
import styles from './home.scss'

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <img className={styles.background} src="/icon_background.png" alt=""/>
        <div className={styles.title}>OMM</div>
        <div className={styles.doc}>
          <p>oumuamua 是全球第一家区块链跨链数字货币抵押贷款金融平台。是基于波卡链、去中心化。用户通过在区块链上 抵押数字资产 的方式 获得USDT等稳定币借贷 的金融贷款服务平台。</p>
        </div>
        <div className={styles.picBox}>
          <div className={styles.picItem}>
            <p>0.00 <span>USTD</span></p>
            <div>历史总促成借贷额</div>
          </div>
          <div className={styles.picItem}>
            <p>2628.08 <span>亿 USTD</span></p>
            <div>数字货币总市值(OMM平台市场规模)</div>
          </div>
        </div>
        <div className={styles.setp}>
          <div className={styles.top}>
            <span>贷入贷出</span>
            <span>区块链征信</span>
          </div>
          <div className={styles.bodys}>
            <span><i /></span><b />
            <span><i /></span>
            <span><i /></span>
            <span><i /></span>
            <span className={styles.lastspan}><i /></span>
          </div>
          <div className={styles.bottom}>
            <span>债务出售</span>
            <span>风控系统</span>
            <span>多币种抵押</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
