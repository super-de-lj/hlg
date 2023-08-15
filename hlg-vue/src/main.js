import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)//应用路由插件
app.use(store)//应用vuex插件

app.mount('#app')
