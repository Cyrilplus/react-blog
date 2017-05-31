import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class Archive extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        months: PropTypes.array.isRequired
    }

    render() {
        const {title, months} = this.props;
        return (
            <div className={styles.panel}>
                <h2 className={styles['panel-title']}>{title}</h2>
                <ul className={styles.archive}>
                    {months.map(item => {
                        return <li key={item} className={styles['archive-item']}><a  href="">{item}</a></li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default Archive;