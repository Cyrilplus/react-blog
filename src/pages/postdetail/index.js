import React from 'react';
import BreadCrumb from '../../components/breadcrumb';
import PostHeader from '../../components/postHeader';
import Post from '../../components/post';
import ThumbupShare from '../../components/thumbupWithShare';
import { NavLink } from 'react-router-dom';
import styles from './index.scss';

const Item = BreadCrumb.Item;

const PostDetailPage = () => {
    return (
        <div>
            <BreadCrumb
                className={styles['margin-top-1']}
            >
                <Item><NavLink className='icon-home' to='/home'></NavLink></Item>
                <Item><NavLink to='/home'>技术杂谈</NavLink></Item>
                <Item><NavLink to='/home'>Python</NavLink></Item>
                <Item>使用Tornado+Redis维护ADSL拨号服务器代理池</Item>
            </BreadCrumb>
            <PostHeader
                className={styles['margin-top-1']}
                title='使用Tornado+Redis维护ADSL拨号服务器代理池'
                category={<a href="">Python</a>}
                author={<a href="">yongNie</a>}
                time='1分钟前'
                viewCount={100}
                commentCount={100}
                likeCount={1000}
            />
            <Post className={styles['margin-top-1']} />
            <ThumbupShare className={`${styles.thumbup}`} thumbupCount={100} shareCount={12} />
        </div>
    );
};

export default PostDetailPage;
