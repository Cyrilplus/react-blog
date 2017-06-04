import React, { Component } from 'react';
import Header from '../../components/header';
import Nav from '../../components/nav';
import Bulletin from '../../components/bulletin';
import Archive from '../../components/dateArchive';
import Footer, { Item as FooterItem} from '../../components/footer';

import HomePage from '../home';
import PostDetailPage from '../postdetail';
import AdminPage from '../admin';

import { ConnectedRouter} from 'react-router-redux';
import { Route, Redirect } from 'react-router';
import { hashHistory } from '../../store/configureStore';

import styles from './index.scss';

const adminRe = /^\/admin/;
const loginRe = /^\/login/;

const NavOptions = [
    {
        label: '首页',
        to: '/home'
    },
    {
        label: '编程之旅',
        to: '/codingcategories',
        children: [
            {
                label: 'JS',
                to: '/codingcategories/js'
            },
            {
                label: 'Python',
                to: '/codingcategories/python'
            },
            {
                label: 'NodeJS',
                to: '/codingcategories/nodejs'
            },
            {
                label: 'C/C++',
                to: '/codingcategories/corcpp'
            },
        ]
    },
    {
        label: '爬虫',
        to: '/crawler'
    },
    {
        label: '个人简介',
        to: '/person'
    },
];

const archiveMonths = [
    '2017年04月',
    '2017年03月',
    '2017年02月',
    '2017年01月',
    '2016年12月',
    '2016年11月',
    '2016年10月',
    '2016年09月',
    '2016年08月',
];

const Frontend = () => {
    return (
        <div>
            <Header title='记路' subTitle='记录成长之路' />
            <Nav options={NavOptions} />
            <div className={`container`}>
                <Bulletin text='欢迎大家访问我的博客 ...' />
                <Route exact path='/' render={() => {
                    return (<Redirect to='/home' />);}} 
                />
                <div className={`${styles.container}`}>
                    <div className={`${styles.content} ${styles['margin-top-10']}`}>
                        <Route exact path='/home' component={HomePage}/>
                        <Route exact path='/detail/:id' component={PostDetailPage} />
                    </div>
                    <div className={`${styles.tool} ${styles['margin-top-6']}`}>
                        <Archive title='文章归档' months={archiveMonths}/>
                    </div>
                </div>
            </div>
            <Footer>
                <FooterItem>记路 版权所有</FooterItem>
                <FooterItem>前端 React, Redux</FooterItem>
                <FooterItem>后端 koa(nodejs)</FooterItem>
                <FooterItem>托管于 个人云</FooterItem>
                <FooterItem>沪 xxxx</FooterItem>
            </Footer>
        </div>
    );
};

export default class App extends Component {
    render() {
        return (
            <ConnectedRouter history={hashHistory}>
                {/* 匹配全局路由 */}
                <Route path='' children={({ location }) => {
                    const pathname = location.pathname;
                    if (loginRe.test(pathname)) {
                        return <h1>Hello Login</h1>;
                    }
                    if (adminRe.test(pathname)) {
                        return <AdminPage />;
                    }
                    return <Frontend />;
                }} />
            </ConnectedRouter>
        );
    }
}
