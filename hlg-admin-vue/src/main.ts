import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";


// import './assets/main.css'

const app = createApp(App)

//element UI icon库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//pinia持久化
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
