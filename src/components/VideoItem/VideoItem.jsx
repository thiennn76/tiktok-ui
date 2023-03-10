import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    CopyLinkIcon,
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    LineIcon,
    LinkedInIcon,
    MusicNoteIcon,
    PineterestIcon,
    RedditIcon,
    ShareMessageIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '~/components/Icon';
import Video from './Video';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    const [isLiked, setIsLiked] = useState(data.is_liked);
    const user = data.user;

    const shareMenu = [
        {
            icon: <EmbedIcon />,
            title: 'Nhúng',
        },
        {
            icon: <ShareMessageIcon />,
            title: 'Gửi đến bạn bè',
        },
        {
            icon: <FacebookIcon />,
            title: 'Share to Facebook',
        },
        {
            icon: <WhatsAppIcon />,
            title: 'Share to WhatsApp',
        },
        {
            icon: <CopyLinkIcon />,
            title: 'Sao chép liên kết',
        },
        {
            icon: <TwitterIcon />,
            title: 'Share to Twitter',
        },
        {
            icon: <LinkedInIcon />,
            title: 'Share to LinkedIn',
        },
        {
            icon: <RedditIcon />,
            title: 'Share to Reddit',
        },
        {
            icon: <TelegramIcon />,
            title: 'Share to Telegram',
        },
        {
            icon: <EmailIcon />,
            title: 'Share to Email',
        },
        {
            icon: <LineIcon />,
            title: 'Share to Line',
        },
        {
            icon: <PineterestIcon />,
            title: 'Share to Pineterest',
        },
    ];

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
            <Link to={`/@${user.nickname}`}>
                <Image className={cx('avatar')} src={user.avatar} alt={user.first_name} />
            </Link>
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
                        <MusicNoteIcon className={cx('music-note')} />
                        {data.music}
                    </p>
                    <div className={cx('video-wrapper')}>
                        <div className={cx('video')}>
                            <Video src={data.file_url} poster={data.thumb_url} height={515} width={290} />
                        </div>
                        <div className={cx('analytics')}>
                            <button
                                className={cx('interact-btn', isLiked && 'liked-btn')}
                                onClick={() => {
                                    setIsLiked(!isLiked);
                                }}
                            >
                                <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                            </button>
                            <strong className={cx('value')}>{reduceCount(data.likes_count)}</strong>
                            <button className={cx('interact-btn')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faComment} />
                            </button>
                            <strong className={cx('value')}>{reduceCount(data.comments_count)}</strong>

                            <Menu
                                items={shareMenu}
                                delay={[0, 400]}
                                offset={[-25, 0]}
                                placement="top-start"
                                className={cx('share-menu')}
                                showMore
                            >
                                <div className={cx('analytics')}>
                                    <button className={cx('interact-btn')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                                    </button>
                                    <strong className={cx('value')}>{reduceCount(data.shares_count)}</strong>
                                </div>
                            </Menu>
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
