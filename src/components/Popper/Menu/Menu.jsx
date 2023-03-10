import PropTypes from 'prop-types';
import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Menu({
    children,
    items = [],
    delay = [],
    offset = [],
    placement = '',
    flip = false,
    className,
    showMore = false,
    hideOnClick = false,
    onChange = () => {},
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const [isShowMore, setIsShowMore] = useState(false);
    const current = history[history.length - 1];

    const renderItems = (className, limit = false) => {
        if (limit)
            return current.data.slice(0, 5).map((item, index) => {
                const isParent = !!item.children;
                return (
                    <MenuItem
                        key={index}
                        data={item}
                        className={className}
                        onClick={() => {
                            if (isParent) {
                                setHistory((pre) => [...pre, item.children]);
                            } else {
                                onChange(item);
                            }
                        }}
                    />
                );
            });
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    className={className}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <HeadlessTippy
            popperOptions={{ modifiers: [{ name: 'flip', enabled: flip }] }}
            interactive
            delay={delay}
            offset={offset}
            placement={placement}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    {showMore ? (
                        <PopperWrapper className={cx('menu-popper', className)}>
                            {isShowMore ? renderItems('show-item') : renderItems('show-item', true)}
                            {!isShowMore && (
                                <Button className={cx('show-btn')} onClick={() => setIsShowMore(true)}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </Button>
                            )}
                        </PopperWrapper>
                    ) : (
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 ? (
                                <>
                                    <Header
                                        title={current.title}
                                        onBack={() => {
                                            setHistory((pre) => pre.slice(0, pre.length - 1));
                                        }}
                                    />
                                    <div className={cx('sub-menu')}>{renderItems('sub-items')}</div>
                                </>
                            ) : (
                                renderItems()
                            )}
                        </PopperWrapper>
                    )}
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
                setIsShowMore(false);
            }}
            hideOnClick={hideOnClick}
        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    delay: PropTypes.array,
    offset: PropTypes.array,
    placement: PropTypes.string,
    flip: PropTypes.bool,
    className: PropTypes.string,
    showMore: PropTypes.bool,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
