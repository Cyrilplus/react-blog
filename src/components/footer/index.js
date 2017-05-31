import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

export class Item extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired
    }
    render() {
        return '';
    }
}

class Footer extends Component {
    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.node).isRequired
    }

    render() {
        const children = this.props.children;
        return (
            <div className={styles.container}>
                <ul className={styles.footer}>
                    {children.map((item, i) => {
                        return (<li key={i}>{i !==0 ? (<span className={styles.separator}>|</span>) : ''}{item.props.children}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

export default Footer;
