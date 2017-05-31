import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class ThumbupShare extends Component {
    static propTypes = {
        className: PropTypes.string,
        thumbupCount: PropTypes.number.isRequired,
        shareCount: PropTypes.number.isRequired
    }

    static defaultProps = {
        className: ''
    }
    
    render() {
        const { className, thumbupCount, shareCount } = this.props;
        return (
            <div className={`${styles.thumbup} ${className}`}>
               <span className={`${styles['thumbup-btn']} icon-thumbs-up`}>点赞({thumbupCount})</span> 
               <span className={styles['middle-circle']}>or</span>
               <span className={`${styles['share-btn']} icon-share`}>分享({shareCount})</span>
            </div>
        );
    }
}

export default ThumbupShare;
