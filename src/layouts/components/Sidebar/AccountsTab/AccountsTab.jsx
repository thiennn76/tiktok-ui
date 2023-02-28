import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountsTab.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function AccountsTab({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <button className={cx('more-btn')}>Xem tất cả</button>
        </div>
    );
}

AccountsTab.propTypes = {
    label: PropTypes.string.isRequired,
};

export default AccountsTab;
