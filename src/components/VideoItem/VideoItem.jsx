import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Video from './Video';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    const user = data.user;

    const reduceCount = (count) => {
        if (count >= 10 ** 9) {
            return Math.round((count / 10 ** 9) * 10) / 10 + 'B';
        }
        if (count >= 10 ** 6) {
            return Math.round((count / 10 ** 6) * 10) / 10 + 'M';
        }
        if (count >= 10 ** 3) {
            return Math.round((count / 10 ** 3) * 10) / 10 + 'K';
        }
        return count;
    };

    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={user.avatar} alt={user.first_name} />
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <Link to={`/@${user.nickname}`} className={cx('info')}>
                        <h3 className={cx('username')}>
                            {user.nickname}
                            {user.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                        </h3>
                        <h4 className={cx('name')}>{`${user.first_name} ${user.last_name}`}</h4>
                    </Link>
                    <Button className={cx('follow-btn')} outline small>
                        Follow
                    </Button>
                    <p className={cx('description')}>{data.description}</p>

                    <p className={cx('music')}>
                        <FontAwesomeIcon className={cx('music-note')} icon={faMusic} />
                        {data.music}
                    </p>
                    <div className={cx('video-wrapper')}>
                        <div className={cx('video')}>
                            <Video src={data.file_url} poster={data.thumb_url} height={515} width={290} />
                        </div>
                        <div className={cx('analytics')}>
                            <button className={cx('interact-btn')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                            </button>
                            <strong className={cx('value')}>{reduceCount(data.likes_count)}</strong>
                            <button className={cx('interact-btn')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faComment} />
                            </button>
                            <strong className={cx('value')}>{reduceCount(data.comments_count)}</strong>
                            <button className={cx('interact-btn')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                            </button>
                            <strong className={cx('value')}>{reduceCount(data.shares_count)}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

VideoItem.proptype = {
    data: PropTypes.object.isRequired,
};

export default VideoItem;
