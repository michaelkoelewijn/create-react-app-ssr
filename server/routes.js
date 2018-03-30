import Home from '../src/containers/Home';
import About from '../src/containers/About';

import { fetchInitialData } from '../src/actions/list';

export const routes = [
    {
        path: '/',
        component: Home,
        loadData: fetchInitialData
    },
    {
        path: '/about',
        component: About,
        loadData: () => ({
            type: 'TEST',
            payload: 'Yara'
        })
    }
]