import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import VideoItem from '~/components/VideoItem';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);

function Home() {
    const [forYouVideos, setForYouVideos] = useState([]);

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
                return <VideoItem key={video.id} data={video} />;
            })}
        </div>
    );
}

export default Home;
