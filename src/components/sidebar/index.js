import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './index.scss';
import banner from './logo.svg';

export class Item extends Component {
    static propTypes = {
        alt: PropTypes.string,
        icon: PropTypes.string.isRequired,
        children: PropTypes.node
    }
}

class SideBar extends Component {
    static propTypes = {
        defaultValue: PropTypes.number,
        value: PropTypes.number,
        onChange: PropTypes.func,
        children: PropTypes.arrayOf(PropTypes.node).isRequired
    }

    static defaultProps = {
        defaultValue: 0,
        onChange: () => {}
    }

    componentWillMount() {
        const { defaultValue, value } = this.props;
        this.state = {
            value: value ? value : defaultValue
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
    }
    

    componentDidMount() {
        this.menuWidth = this.menuEle.offsetWidth + 1;
        this.contentWidth = this.contentEle.offsetWidth + 1;
        this.moveDistance = this.menuWidth + this.contentWidth;
        if (!this.isHasChildren(this.state.value)) {
            this.contentEle.style.left = `-${this.moveDistance}px`;
        }
        this.contentEle.style.opacity = '0.9';
        setTimeout(() => {
            this.contentEle.style.transition = '0.5s';
        }, 0);
    }

    isHasChildren(value) {
        const children = this.props.children;
        const content = children[value].props.children;

        if (!content) {
            return false;
        }
        return true;
    }
    
    handleChange(e, value) {
        e.preventDefault();
        const isSame = value === this.state.value;
        if (!('value' in this.props)) {
            const isDisplay = this.isHasChildren(value);
            if (this.contentEle.style.left.startsWith('-')) {
                this.setState({
                    value
                });
                if (isDisplay) {
                    this.contentEle.style.left = `${this.menuWidth}px`;
                }
            } else {
                this.contentEle.style.left = `-${this.moveDistance}px`;
                setTimeout(() => {
                    this.setState({
                        value
                    });
                    if (isDisplay && !isSame) {
                        this.contentEle.style.left = `${this.menuWidth}px`;
                    }
                }, 400);
            }
        }
    }

    render() {
        const children = this.props.children;
        const value = this.state.value;
        const content = children[value].props.children;
        return (
            <div className={styles.sidebar}>
                <ul className={styles.menu} ref={ref => this.menuEle = ref}>
                    <li className={styles.banner}><Link to='/'><img src={banner} alt=""/></Link></li>
                    {children.map((c ,i) => {
                        return <li
                                className={styles.item}
                                key={i}
                               >
                                    <a
                                        href=""
                                        onClick={e => this.handleChange(e, i)}
                                        title={c.props.alt}
                                        className={`${styles.circle} ${i === value ? styles.active : ''}`}
                                    >
                                        <span className={`icon-${c.props.icon}`}
                                        ></span>
                                    </a>
                               </li>;
                    })}
                </ul>
                <div className={styles.content} ref={ref => this.contentEle = ref}>
                    { content }
                </div>
            </div>
        );
    }
}

export default SideBar;
