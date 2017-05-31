import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './index.scss';

class Item extends Component {
    static propTypes = {
        label: PropTypes.string,
        to: PropTypes.string,
        active: PropTypes.bool,
        children: PropTypes.array
    }

    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        const children = this.props.children;
        if (this.subNav && children && children.length) {
            const height = children.length * 40;
            this.subNav.style.height = `${height}px`;
        }
    }

    handleMouseLeave() {
        if (this.subNav) {
            this.subNav.style.height = '0';
        }
    }

    render() {
        const { label, to, children} = this.props;
        const classes = classnames({
            [styles.item]: true,
        });

        return (
            <li className={classes} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <NavLink to={to} activeClassName={styles.active}>{label}</NavLink>
                {children 
                 ?
                 (<ul className={styles['sub-nav']} ref={ref => this.subNav = ref}>{children.map(item => {
                     return <li className={styles['sub-nav-item']} key={item.label}><NavLink activeClassName={styles['sub-active']} to={item.to} >{item.label}</NavLink></li>;
                 })}</ul>)
                 : ''
                }
            </li>
        );
    }
}

export default Item;