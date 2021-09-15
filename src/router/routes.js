/* 所有路由匹配的数组 */
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Search from '../pages/Search'

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/search',
    component: Search,
  },
]
