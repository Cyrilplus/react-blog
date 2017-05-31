import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

/**
 * hostposts = [
 *  {
 *      title,
 *      likeCount,
 *      id
 *  }
 * ]
 */

class HotPosts extends Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        hotPosts: PropTypes.array.isRequired,
    }

    static defaultProps = {
        className: ''
    }

    render() {
        const { className, title, hotPosts } = this.props;
        return (
            <div className={`${styles.panel} ${className}`}>
                <h2 className={styles['panel-title']}>{title}</h2>
                <ul className={styles.post}>
                    {hotPosts.map((item, i) => {
                        return (
                            <li className={styles['post-item']} key={i}>
                                <span className={`${styles['post-index']} ${styles[`label-${i + 1}`]}`}>{i + 1}</span>
                                <a>{item.title}</a>
                                <span className={`icon-thumbs-up ${styles['post-like-count']}`}>{item.likeCount}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default HotPosts;