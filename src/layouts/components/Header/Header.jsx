import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
    CoinIcon,
    FeedbackIcon,
    InboxIcon,
    LanguageIcon,
    LiveIcon,
    LogoutIcon,
    MessageIcon,
    MoreIcon,
    SettingIcon,
    ShortcutIcon,
    ThemeIcon,
    UserIcon,
} from '~/components/Icon';
import Search from '../Search';
import Login from '~/components/Login';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'Ngôn ngữ',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Ngôn ngữ',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <ShortcutIcon />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <ThemeIcon />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const currentUser = false;
    const [login, setLogin] = useState(false);

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'Xem hồ sơ',
            to: '/@thien',
        },
        {
            icon: <CoinIcon />,
            title: 'Nhận Xu',
            to: config.routes.coin,
        },
        {
            icon: <LiveIcon />,
            title: 'LIVE Studio',
            to: config.routes.studio,
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: config.routes.setting,
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: config.routes.logout,
            separate: true,
        },
    ];

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link className={cx('logo')} to={config.routes.home}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />} to={config.routes.upload}>
                                Tải lên
                            </Button>
                            <Tippy delay={[0, 100]} content="Tin nhắn" placement="bottom" theme="header-popup">
                                <Button className={cx('icon-btn')} to={config.routes.messages}>
                                    <MessageIcon />
                                </Button>
                            </Tippy>
                            {/* Popup Inbox */}
                            <Tippy delay={[0, 100]} content="Hộp thư" placement="bottom" theme="header-popup">
                                <Button className={cx('icon-btn')}>
                                    <InboxIcon />
                                    <div className={cx('badge')}>76</div>
                                </Button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />} to={config.routes.upload}>
                                Tải lên
                            </Button>
                            <Button primary medium onClick={() => setLogin(true)}>
                                Đăng nhập
                            </Button>
                            {login && <Login login={login} onClose={() => setLogin(false)} />}
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        delay={[0, 700]}
                        offset={[12, 12]}
                        placement="bottom-end"
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image className={cx('user-avatar')} src={images.testAvatar} alt="user avatar" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <MoreIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
