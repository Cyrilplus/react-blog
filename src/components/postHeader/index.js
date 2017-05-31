import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class PostHeader extends Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired,
        category: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired,
        author: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired,
        time: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired,
        viewCount: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired,
        commentCount: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired,
    }

    static defaultProps = {
        className: ''
    }

    render() {
        const { className, title, category, author, time, viewCount, commentCount} = this.props;
        return (
            <div className={`${styles.header} ${className}`}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.meta}>
                    <span className='icon-list-alt'>{category}</span>
                    <span className='icon-user'>{author}</span>
                    <span className='icon-clock'>{time}</span>
                    <span className='icon-eye'>{viewCount}</span>
                    <span className='icon-chat-empty'>{commentCount}</span>
                </p>
            </div>
        );
    }
}

export default PostHeader;