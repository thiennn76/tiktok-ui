import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './AccountsTab.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <AccountPreview />
            </div>
        );
    };

    return (
        <HeadlessTippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/86fd7660037e6587340b4cc919516bb5~c5_100x100.jpeg?x-expires=1677736800&x-signature=bIEY0lIBCGCLfpJjLr2i99I6FR0%3D"
                    alt=""
                />
                <div className={cx('info')}>
                    <h4 className={cx('username')}>
                        <span>mocachodien</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                    </h4>
                    <p className={cx('name')}>MOCA 🐶🇻🇳</p>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default AccountItem;
