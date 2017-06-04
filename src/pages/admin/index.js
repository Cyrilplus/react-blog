import React, { Component } from 'react';
import SideBar, { Item } from '../../components/sidebar';
import PostList from '../../components/postlist';
import Editor from '../../components/editor';
import styles from './index.scss';

const postlist = [
    {
        id: 1,
        title: '我的第一篇博客',
        time: '1分钟之前'
    },
    {
        id: 2,
        title: '我的第一篇博客',
        time: '1分钟之前'
    },
    {
        id: 3,
        title: '我的第一篇博客',
        time: '1分钟之前'
    },
];

class AdminPage extends Component {
    render() {
        return (
            <div className={styles.admin}>
                <SideBar defaultValue={1}>
                    <Item icon='home' alt='home'>
                        <div>
                            我是文章页
                        </div>
                        <div>
                            我是文章页
                        </div>
                        <div>
                            我是文章页
                        </div>
                        <div>
                            我是文章页
                        </div>
                        <div>
                            我是文章页
                        </div>
                    </Item>
                    <Item icon='user' alt='文章'>
                    </Item>
                    <Item icon='home' alt='文章2'>
                        <div>
                            我是文章页2
                        </div>
                    </Item>
                    <Item icon='user' alt='文章3'>
                        <div>
                            我是文章页3
                        </div>
                    </Item>
                </SideBar>
                <PostList dataSource={postlist} />
                <Editor />
            </div>
        );
    }
}

export default AdminPage;