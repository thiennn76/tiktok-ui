import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faMusic } from '@fortawesome/free-solid-svg-icons';

import styles from './Video.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Video({ onReady, data }) {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    const options = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: data.file_url,
                type: 'video/mp4',
            },
        ],
    };
    const user = data.user;

    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = document.createElement('video-js');

            videoElement.classList.add(cx('vjs-big-play-centered'));
            videoRef.current.appendChild(videoElement);

            const player = (playerRef.current = videojs(videoElement, options, () => {
                onReady && onReady(player);
            }));
        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, videoRef, onReady]);

    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

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
                        <h4 className={cx('name')}>{`${data.first_name} ${data.last_name}`}</h4>
                    </Link>
                    <Button className={cx('follow-btn')} outline small>
                        Follow
                    </Button>
                    <p className={cx('description')}>{data.description}</p>
                    <p className={cx('music')}>
                        <FontAwesomeIcon className={cx('music-note')} icon={faMusic} />
                        {data.music}
                    </p>
                </div>
                <div className={cx('video')} data-vjs-player>
                    <div className={cx('video-content')} ref={videoRef} />
                </div>
            </div>
        </div>
    );
}

export default Video;
