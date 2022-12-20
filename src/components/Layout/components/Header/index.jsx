import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
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
    SearchIcon,
    SettingIcon,
    ShortcutIcon,
    ThemeIcon,
    UserIcon,
} from '~/components/Icon';

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
    const [searchResult, setSearchResult] = useState([]);
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
            to: '/coin',
        },
        {
            icon: <LiveIcon />,
            title: 'LIVE Studio',
            to: '/studio',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

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
                <Link className={cx('logo')} to="/">
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper limitHeight>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <span className={cx('search-separator-line')}></span>
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                        <div className={cx('input-border')}></div>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Tippy delay={[0, 100]} content="Tin nhắn" placement="bottom">
                                <Button className={cx('icon-btn')} to="/messages">
                                    <MessageIcon />
                                </Button>
                            </Tippy>
                            {/* Popup Inbox */}
                            <Tippy delay={[0, 100]} content="Hộp thư" placement="bottom">
                                <Button className={cx('icon-btn')}>
                                    <InboxIcon />
                                </Button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
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
