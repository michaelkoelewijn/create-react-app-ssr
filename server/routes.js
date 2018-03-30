import Home from '../src/containers/Home';
import About from '../src/containers/About';

import { fetchInitialData, fetchInitialAboutData } from '../src/actions/list';

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