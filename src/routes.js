import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import tasks from './views/nav1/tasks.vue'
import gifts from './views/nav1/gifts.vue'

import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '薅羊毛',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页' ,hidden:true},
            { path: '/', component: tasks, name: '首页' },
            { path: '/form', component: Form, name: '新增任务' ,hidden:true},
            { path: '/user', component: gifts, name: '奖品',hidden:true },
            { path: '/gifts', component: gifts, name: '奖品' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '红包码',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '支付宝红包码' },
            { path: '/page5', component: Page5, name: '云闪付红包码' },
            { path: '/page6', component: Page5, name: '京东红包码' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page7', component: Page6, name: '最新活动' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '数据分析',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: '历史曲线' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;