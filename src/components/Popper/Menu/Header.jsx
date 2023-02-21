import PropTypes from 'prop-types';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <Button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon className={cx('back-icon')} icon={faChevronLeft} />
            </Button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
