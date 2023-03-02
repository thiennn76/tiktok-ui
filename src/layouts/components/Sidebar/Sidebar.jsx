import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import * as userService from '~/services/userService';
import * as followService from '~/services/followService';
import AccountsTab from './AccountsTab';
import Menu from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const INIT_PER_PAGE = 20;

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followingUsers, setFollowingUsers] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);

    const handleSeeMore = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        userService
            .getSuggested({ page: INIT_PAGE, perPage: INIT_PER_PAGE })
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        followService
            .getFollowing({ page })
            .then((data) => {
                setFollowingUsers((prev) => [...prev, ...data]);
            })
            .catch((err) => console.log(err));
    }, [page]);

    return (
        <aside className={cx('wrapper')}>
            <Menu />
            <AccountsTab label="Tài khoản được đề xuất" data={suggestedUsers} />
            <AccountsTab label="Các tài khoản đang follow" data={followingUsers} onSeeMore={handleSeeMore} />
        </aside>
    );
}

export default Sidebar;
