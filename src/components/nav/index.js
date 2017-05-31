import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import classnames from './index.scss';

/**
 * options = [
 *  {
 *      label,
 *      to,
 *      children: [
 *          {
 *              label,
 *              to
 *          }
 *      ]
 *  }
 * ]
 */

class Nav extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired
    }

    render() {
        const { options } = this.props;
        return (
            <div className={classnames.container}>
                <ul className={`${classnames.nav} container`}>
                    {options.map((item, i) => {
                        return <Item key={item.label} active={i === 0} {...item} />;
                    })}
                </ul>
            </div>
        );
    }
}

export default Nav;
