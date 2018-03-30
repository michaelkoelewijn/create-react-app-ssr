import Home from './containers/Home';
import About from './containers/About';

import { fetchInitialData, fetchInitialAboutData } from './actions/list';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        loadData: fetchInitialData
    },
    {
        path: '/about',
        component: About,
        loadData: fetchInitialAboutData
    }
]