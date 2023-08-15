
export default [
    {
        path: '/index', component: import('@/views/Index.vue'),
        children: [
            { path: '/index/home', component: import('@/views/index/Home.vue') },
            { path: '/index/type', component: import('@/views/index/Type.vue') },
            { path: '/index/gwc', component: import('@/views/index/Gwc.vue') },
            { path: '/index/user', component: import('@/views/index/User.vue') },
            { path: '/index/', redirect: '/index/home' },
            { path: '/index/:error(.*)', component: import('@/views/NotFound.vue') }
        ]
    },
    {
        path: '/citylist', component: import('@/views/CityList.vue'),
        //  children: [{ path: '/citylist/', component: CityList }]
    },
    { path: '/login', component: import('@/views/Login.vue') },
    {
        path: '/register', component: import('@/views/Register.vue'), children: [
            { path: '/register/phone', component: import('@/views/Register/Phone.vue') },
            { path: '/register/code', component: import('@/views/Register/Code.vue') },
            { path: '/register/pass', component: import('@/views/Register/Pass.vue') },
            { path: '/register/', redirect: '/register/phone' },
            { path: '/register/:error(.*)', component: import('@/views/NotFound.vue') }
        ]
    },
    { path: '/good/:id', component: import('@/views/Good.vue') },
    { path: '/goodlist/:id*', component: import('@/views/GoodList.vue') },
    //重定向
    { path: '/', redirect: '/index' },
    //404
    { path: '/:error(.*)', component: import('@/views/NotFound.vue') }
]