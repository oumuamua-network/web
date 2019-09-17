import React from 'react'
import Component from '@/Component'
import classs from 'classnames'
import styles from './header.scss'
import { Link } from 'react-router-dom'

class Header extends Component {
  state = {
    index: 0
  }

  change (index) {
    this.setState({ index })
  }

  render() {
    const index = this.state.index
    return (
      <div className={styles.header}>
        <Link 
          className={!index ? styles.active : ''}
          to={{pathname: "/"}}
          onClick={this.change.bind(this, 0)}
        >
          <i className="icon icon-logo" />
        </Link>
        <Link
          to={{pathname: "/loan"}}
          className={index === 1 ? styles.active : ''}
          onClick={this.change.bind(this, 1)}
        >
          借贷市场
        </Link>
        <Link 
          to={{pathname: "/capital"}}
          className={index === 2 ? styles.active : ''}
          onClick={this.change.bind(this, 2)}
        >
          资金市场
        </Link>
        <Link 
          to={{pathname: "/launchLoan"}}
          className={index === 3 ? styles.active : ''}
          onClick={this.change.bind(this, 3)}
        >
          发起借款
        </Link>
        <Link 
          to={{pathname: "/launchCapital"}}
          className={index === 4 ? styles.active : ''}
          onClick={this.change.bind(this, 4)}
        >
          发起资金
        </Link>
        <div className={styles.right}>
          <a target="blank" href="https://github.com/oumuamua-network/whitepaper">白皮书</a>
          <a target="blank" href="https://github.com/oumuamua-network">Github</a>
        </div>
      </div>
    );
  }
}

export default Header
