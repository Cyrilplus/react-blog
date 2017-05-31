import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import styles from './index.scss';

class BreadCrumb extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.arrayOf(PropTypes.node),
    }

    static defaultProps = {
        className: ''
    }

    render() {
        const { className, children } = this.props;
        const end = children.length - 1;
        return (
            <ul className={`${styles.breadcrumb} ${className}`}>
                {children.map((item, i) => {
                    return (<li className={styles.item} key={i}>{item.props.children} {end !== i ? <span>/</span> : ''}</li>);
                })}
            </ul>
        );
    }
}

BreadCrumb.Item = Item;

export default BreadCrumb;
