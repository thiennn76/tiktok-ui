import PropTypes from 'prop-types';
import { ControlBar, Player, PlayToggle, VolumeMenuButton } from 'video-react';
import 'video-react/dist/video-react.css';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);

function Video({ src, poster, fluid = false, height, width }) {
    return (
        <Player src={src} poster={poster} fluid={fluid} height={height} width={width}>
            <ControlBar className={cx('video-controlbar')} disableDefaultControls>
                <PlayToggle />
                <VolumeMenuButton vertical />
            </ControlBar>
        </Player>
    );
}

Video.proptype = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    fluid: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
};

export default Video;
