import { Link } from 'react-router-dom';
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
    const currentUser = true;

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
                            <Tippy delay={[0, 100]} content="Tin nhắn" placement="bottom">
                                <Button className={cx('icon-btn')} to={config.routes.messages}>
                                    <MessageIcon />
                                </Button>
                            </Tippy>
                            {/* Popup Inbox */}
                            <Tippy delay={[0, 100]} content="Hộp thư" placement="bottom">
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
                            <Button primary medium>
                                Đăng nhập
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/79530691_2746138355612727_8147857160160673792_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=7LXUCbB5A5IAX_zDCXs&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfCr2Lhr0cdZTRh8rMEkjgnqt408_rdyTzZiPmYnbT78JQ&oe=63C501A6"
                                alt="user avatar"
                            />
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
