import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
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
        <PopperWrapper className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.first_name} />
                <Button primary medium>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                <div className={cx('analytics')}>
                    <strong className={cx('value')}>{reduceCount(data.followers_count)}</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>{reduceCount(data.likes_count)}</strong>
                    <span className={cx('label')}>Thích</span>
                </div>
            </div>
        </PopperWrapper>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
