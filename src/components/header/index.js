import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from './index.scss';

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string
    }

    render() {
        const { title, subTitle } = this.props;
        return (
            <div className={classnames.header}>
                <span className={classnames.title}>{title}</span>
                <span className={classnames['sub-title']}>{subTitle}</span>
            </div>
        );
    }
}

export default Header;
