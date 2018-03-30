import Home from '../src/containers/Home';
import About from '../src/containers/About';

export const routes = [
    {
        path: '/',
        component: Home,
        loadData: 'test'
    },
    {
        path: '/about',
        component: About,
        loadData: 'test'
    }
]