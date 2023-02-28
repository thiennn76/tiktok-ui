import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <PopperWrapper className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/86fd7660037e6587340b4cc919516bb5~c5_100x100.jpeg?x-expires=1677736800&x-signature=bIEY0lIBCGCLfpJjLr2i99I6FR0%3D"
                    alt=""
                />
                <Button primary medium>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('username')}>
                    <span>mocachodien</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <p className={cx('name')}>MOCA 🐶🇻🇳</p>
                <div className={cx('analytics')}>
                    <strong className={cx('value')}>9.3M</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>158.2M</strong>
                    <span className={cx('label')}>Thích</span>
                </div>
            </div>
        </PopperWrapper>
    );
}

export default AccountPreview;
