import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './AccountsTab.module.scss';
import Image from '~/components/Image';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <AccountPreview data={data} />
            </div>
        );
    };

    return (
        <div>
            <HeadlessTippy interactive delay={[800, 0]} offset={[30, 0]} placement="bottom" render={renderPreview}>
                <Link to={`/@${data.nickname}`} className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.first_name} />
                    <div className={cx('info')}>
                        <h4 className={cx('username')}>
                            <span>{data.nickname}</span>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                        </h4>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </Link>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
