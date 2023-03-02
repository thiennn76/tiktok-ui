import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import config from '~/config';
import {
    HomeRegularIcon,
    HomeSolidIcon,
    UserGroupRegularIcon,
    UserGroupSolidIcon,
    LiveRegularIcon,
    LiveSolidIcon,
} from '~/components/Icon';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <nav className={cx('wrapper')}>
            <MenuItem
                title="Dành cho bạn"
                to={config.routes.home}
                icon={<HomeRegularIcon />}
                activeIcon={<HomeSolidIcon />}
            />
            <MenuItem
                title="Đang Follow"
                to={config.routes.following}
                icon={<UserGroupRegularIcon />}
                activeIcon={<UserGroupSolidIcon />}
            />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveRegularIcon />} activeIcon={<LiveSolidIcon />} />
        </nav>
    );
}

export default Menu;
