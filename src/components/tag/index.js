import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class Tag extends Component {
    static propTypes = {
        tag: PropTypes.string.isRequired
    }

    render() {
        const tag = this.props.tag;
        return (
            <span className={styles.tag}>{tag}</span>
        );
    }
}

export default Tag;