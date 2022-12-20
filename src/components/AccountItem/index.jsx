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
                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/79530691_2746138355612727_8147857160160673792_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=7LXUCbB5A5IAX_zDCXs&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfCr2Lhr0cdZTRh8rMEkjgnqt408_rdyTzZiPmYnbT78JQ&oe=63C501A6"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>thiennn.76</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <p className={cx('name')}>Thiên Phùng</p>
            </div>
        </div>
    );
}

export default AccountItem;
