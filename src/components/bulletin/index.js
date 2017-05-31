import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './index.scss';

class Bulletin extends Component {
    static propTypes = {
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired
    }

    render() {
        const { text } = this.props;
        return (
            <div className={styles.bulletin}>
                <div>
                    <span className={`icon-bell ${styles.icon}`}>&nbsp;&nbsp;{text}</span>
                </div>
                <div className={styles.systemtool}>
                    <span className='icon-share'><Link to='/'>&nbsp;投稿</Link></span>
                    <span className='icon-user'><Link to='/'>&nbsp;登录</Link></span>
                </div>
            </div>
        );
    }
}

export default Bulletin;