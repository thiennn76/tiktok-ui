import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
const date = new Date();

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link className={cx('link')}>Giới thiệu</Link>
                <Link className={cx('link')}>Bảng tin</Link>
                <Link className={cx('link')}>Liên hệ</Link>
                <Link className={cx('link')}>Sự nghiệp</Link>
                <Link className={cx('link')}>ByteDance</Link>
            </div>
            <div className={cx('container')}>
                <Link className={cx('link')}>Tiktok for Good</Link>
                <Link className={cx('link')}>Quảng cáo</Link>
                <Link className={cx('link')}>Devlopers</Link>
                <Link className={cx('link')}>Minh bạch</Link>
                <Link className={cx('link')}>Tiktok Rewards</Link>
                <Link className={cx('link')}>Tiktok Browse</Link>
                <Link className={cx('link')}>Tiktok Embeds</Link>
            </div>
            <div className={cx('container')}>
                <Link className={cx('link')}>Trợ giúp</Link>
                <Link className={cx('link')}>An toàn</Link>
                <Link className={cx('link')}>Điều khoản</Link>
                <Link className={cx('link')}>Quyền riêng tư</Link>
                <Link className={cx('link')}>Cổng thông tin Tác giả</Link>
                <Link className={cx('link')}>Hướng dẫn cộng đồng</Link>
            </div>
            <div className={cx('container')}>
                <Tippy
                    interactive
                    delay={[0, 100]}
                    content="NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK"
                    placement="top-start"
                    maxWidth={200}
                    theme="footer-more"
                >
                    <span className={cx('more')}>Thêm</span>
                </Tippy>
            </div>
            <p className={cx('license')}>© {date.getFullYear()} Tiktok-UI-clone</p>
        </div>
    );
}

export default Footer;
