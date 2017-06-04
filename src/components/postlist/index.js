import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

/**
 * dataSource = [
 *      {
 *          id,
 *          title,
 *          time
 *      }
 * ]
 */

class PostList extends Component {
    static propTypes = {
        dataSource: PropTypes.array.isRequired,
        onClick: PropTypes.func,
    }

    static defaultProps = {
        onClick: console.log
    }

    render() {
        const { dataSource, onClick } = this.props;
        return (
            <div className={styles.postlist}>
                <h2 className={styles.title}>文章列表</h2>
                <ul className={styles.list}>
                    {dataSource.map(d => {
                        return (
                            <li key={d.id} className={styles.item} onClick={() => onClick(d.id)}>
                                <div className={styles.content}>
                                    <h2 className={styles['post-title']}>{d.title}</h2>
                                    <p className={styles.time}>{d.time}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default PostList;