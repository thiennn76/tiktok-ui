import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className, limitHeight }) {
    return <div className={cx('wrapper', limitHeight && 'limit-height', className)}>{children}</div>;
}

export default Wrapper;
