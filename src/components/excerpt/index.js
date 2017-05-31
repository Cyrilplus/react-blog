import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tag from '../tag/index';
import styles from './index.scss';

class Excerpt extends Component {
    static propTypes = {
        className: PropTypes.string,
        img: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        viewCount: PropTypes.number.isRequired,
        commentCount: PropTypes.number.isRequired,
        likeCount: PropTypes.number.isRequired
    }

    static defaultProps = {
        className: ''
    }

    render() {
        const { className, img, tag, link, title, text, author, time, viewCount, commentCount, likeCount} = this.props;

        return (
            <article className={`${styles.article} ${className}`}>
                <div>
                    <Tag tag={tag} />
                    <h2 className={styles.title}><Link to={link}>{title}</Link></h2>
                </div>
                <div>
                    <img src={img} alt="" className={styles.img}/>
                    <p className={styles.excerpt}>{text}</p>
                </div>
                <p className={styles['author-info']}>
                    <span className={`icon-user ${styles.icon}`}><span>{author}</span></span>
                    <span className={`icon-clock ${styles.icon}`}><span>{time}</span></span>
                    <span className={`icon-eye ${styles.icon}`}><span>{viewCount}</span></span>
                    <span className={`icon-chat-empty ${styles.icon}`}><span>{commentCount}</span></span>
                    <span className={`icon-thumbs-up ${styles.icon} ${styles.themeColor}`}><span>{likeCount}</span></span>
                </p>
            </article>
        );
    }
}

export default Excerpt;
