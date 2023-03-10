import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import DiscoverItem from './DiscoverItem';

const cx = classNames.bind(styles);

//fetch Hastag-Music API
const DISCOVER_DATA = [
    {
        id: 1,
        type: 'tag',
        title: 'suthatla',
    },
    {
        id: 2,
        type: 'tag',
        title: 'mackedoi',
    },
    {
        id: 3,
        type: 'tag',
        title: 'sansangthaydoi',
    },
    {
        id: 4,
        type: 'music',
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia',
    },
    {
        id: 5,
        type: 'music',
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
    },
    {
        id: 6,
        type: 'music',
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
    },
    {
        id: 7,
        type: 'tag',
        title: '7749hieuung',
    },
    {
        id: 8,
        type: 'tag',
        title: 'genzlife',
    },
    {
        id: 9,
        type: 'music',
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    },
    {
        id: 10,
        type: 'music',
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    },
];

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Khám phá</p>
            <div className={cx('discover-menu')}>
                {DISCOVER_DATA.map((data) => {
                    return <DiscoverItem key={data.id} data={data} />;
                })}
            </div>
        </div>
    );
}

export default Discover;
