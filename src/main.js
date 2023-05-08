import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './style.scss'
import './assets/scss/common.scss'
import router from './router/index'
import copy from './directives/v-copy.js'
import UI from '@/components/index.js'
const app = createApp(App)
app.use(router)
app.directive('copy', copy)
app.use(UI).mount('#app')
