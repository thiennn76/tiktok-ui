import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './AccountsTab.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function AccountsTab({ label, data = [], onSeeMore }) {
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll((prevState) => !prevState);
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {!onSeeMore &&
                !showAll &&
                data.slice(0, 5).map((account) => {
                    return <AccountItem key={account.id} data={account} />;
                })}

            {(onSeeMore || (!onSeeMore && showAll)) &&
                data.map((account) => {
                    return <AccountItem key={account.id} data={account} />;
                })}

            {onSeeMore ? (
                <button className={cx('more-btn')} onClick={onSeeMore}>
                    Xem thêm
                </button>
            ) : (
                <button className={cx('more-btn')} onClick={handleShowAll}>
                    {showAll ? 'Ẩn bớt' : 'Xem tất cả'}
                </button>
            )}
        </div>
    );
}

AccountsTab.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
    onSeeMore: PropTypes.func,
};

export default AccountsTab;
