import Home from '../pages/home/Home'
import Car from '../pages/cars/car'


export default [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/car',
        name: 'car',
        component: Car
    },
    {
        path: '/',
        redirect: '/home'
    }
]



