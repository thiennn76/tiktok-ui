import classNames from 'classnames/bind';
import AccountsTab from './AccountsTab';
import Menu from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu />
            <AccountsTab label="Tài khoản được đề xuất" />
            <AccountsTab label="Các tài khoản đang follow" />
        </aside>
    );
}

export default Sidebar;
