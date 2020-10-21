import Vue from 'vue'
import Router from 'vue-router'

const Portfolio = () => import(/* webpackChunkName: "group-foo" */ './components/portfolio/Portfolio')
const Stocks = () => import(/* webpackChunkName: "group-foo" */'./components/stocks/Stocks')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: () => import('./components/Home') },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
})