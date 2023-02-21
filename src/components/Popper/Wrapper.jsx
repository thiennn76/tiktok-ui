import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className, limitHeight = false }) {
    return <div className={cx('wrapper', limitHeight && 'limit-height', className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    limitHeight: PropTypes.bool,
};

export default Wrapper;
