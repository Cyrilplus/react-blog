import React from 'react';
import Excerpt from '../../components/excerpt';
import HotPosts from '../../components/hotPosts';
import img from '../../images/timthumb.jpeg';
import styles from './index.scss';

const hotPosts = [
    {
        title: 'Python爬虫学习系列教程',
        likeCount: 1000,
    },
    {
        title: 'NodeJs爬虫学习系列教程',
        likeCount: 920,
    },
    {
        title: 'C++爬虫学习系列教程',
        likeCount: 830,
    },
    {
        title: 'Go爬虫学习系列教',
        likeCount: 123,
    },
    {
        title: 'Php爬虫学习系列教程',
        likeCount: 10,
    },
];

const HomePage = () => {
    const excerpt = key => {
        return (
            <Excerpt
                key={key}
                className={styles['margin-top-10']}
                img={img}
                link='/detail/1'
                title='使用Tornado+Redis维护ADSL拨号服务器代理池'
                tag='python'
                text='我们尝试维护过一个免费的代理池，但是代理池效果用过就知道了，毕竟里面有大量免费代理，虽然这些代理是可用的，但是既然我们能刷到这个免费代理，别人也能呀，所以就导致这个代理同时被很多人使用来抓取网站，所以当我们兴致勃勃地拿他来抓取某个网站的时候，会发现它还是被网站封禁的状态，所以在某...'
                author='yongNie'
                time='1分钟前'
                viewCount={100}
                commentCount={100}
                likeCount={1000}
            />
        );
    };
    return (
        <div className={`${styles['margin-bottom-10']}`}>
            <HotPosts hotPosts={hotPosts} title='热门推荐' />
            <section>
                {(new Array(10)).fill(0).map((v, i) => {
                    return excerpt(i);
                })}
            </section>
        </div>
    );
};

export default HomePage;