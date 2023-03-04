import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Video from '~/components/Video';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);

function Home() {
    const [forYouVideos, setForYouVideos] = useState([]);
    const playerRef = useRef(null);

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
    };

    useEffect(() => {
        videoService
            .getVideos({ type: 'for-you', page: 1 })
            .then((data) => {
                setForYouVideos(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={cx('wrapper')}>
            {forYouVideos.map((video) => {
                return <Video key={video.id} onReady={handlePlayerReady} data={video} />;
            })}
        </div>
    );
}

export default Home;
