import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    // { path: config.routes.messages, component: Messages },
    // { path: config.routes.coin, component: Coin },
    // { path: config.routes.studio, component: Studio },
    // { path: config.routes.setting, component: Setting },
    // { path: config.routes.logout, component: Logout },
];

// Private routes
const privateRoutes = {};

export { publicRoutes, privateRoutes };
