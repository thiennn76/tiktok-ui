import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Login.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Login({ login, onClose }) {
    const [close, setClose] = useState(false);

    const handleClose = () => {
        setClose(true);
        onClose();
    };

    useEffect(() => {
        document.getElementById('popup-outside').addEventListener('click', (e) => {
            if (e.target.id === 'popup-outside') handleClose();
        });
    });

    return (
        <div id="popup-outside" className={cx('wrapper', close && 'close', login && 'show')}>
            <div className={cx('container')}>
                <Button className={cx('close-btn')} onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </Button>
                <div className={cx('body')}>
                    <form action="" method="post">
                        <h2 className={cx('title')}>Đăng nhập</h2>
                        <input className={cx('input')} placeholder="Email" />
                        <input className={cx('input')} placeholder="Mật khẩu" type={'password'} />
                        <p className={cx('reset-pw')}>Quên mật khẩu?</p>
                        <Button className={cx('submit-btn')} primary>
                            Đăng nhập
                        </Button>
                    </form>
                    <div className={cx('footer')}>
                        Bạn không có tài khoản?
                        <span className={cx('footer-btn')}>Đăng ký</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
