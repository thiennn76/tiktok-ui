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

function Menu() {
    return (
        <nav>
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
