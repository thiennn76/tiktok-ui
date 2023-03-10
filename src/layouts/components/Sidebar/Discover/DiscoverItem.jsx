import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Discover.module.scss';
import { HashtagIcon, MusicNoteIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function DiscoverItem({ data }) {
    return (
        <Link to={`/${data.type}/${data.title}`} className={cx('discover-btn')}>
            {data.type === 'tag' ? <HashtagIcon className={cx('icon')} /> : <MusicNoteIcon className={cx('icon')} />}
            <p className={cx('title')}>{data.title}</p>
        </Link>
    );
}

DiscoverItem.proptype = {
    data: PropTypes.object.isRequired,
};

export default DiscoverItem;
