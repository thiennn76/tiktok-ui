import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import Button from '~/components/Button';
import { ScrollToTopIcon } from '~/components/Icon';
import styles from './ScrollToTopButton.module.scss';

const cx = classNames.bind(styles);

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    const ScrollToTop = () => {
        document.getElementById('scrollable-content').scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const scrollContent = document.getElementById('scrollable-content');

        const toggleVisible = () => {
            const scrolled = scrollContent.scrollTop;
            setVisible(scrolled > 50);
        };

        scrollContent.addEventListener('scroll', toggleVisible);

        return () => {
            scrollContent.removeEventListener('scroll', toggleVisible);
        };
    });

    return (
        <div className={cx('wrapper')}>
            <Button className={cx('scroll-btn', visible ? 'show' : 'hide')} onClick={ScrollToTop}>
                <ScrollToTopIcon />
            </Button>
        </div>
    );
}

export default ScrollToTopButton;
