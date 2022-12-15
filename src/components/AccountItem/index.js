import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1671249600&x-signature=xsh%2BzhydKlPfOxC3CxbvEwDhz3s%3D"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>Hoa_2309</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <p className={cx('name')}>Ngô Ngọc Hòa</p>
            </div>
        </div>
    );
}

export default AccountItem;
