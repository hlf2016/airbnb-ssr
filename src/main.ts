import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import i18n from './lang/i18n'

// 应用 tailwindcss 的预设样式
import '@unocss/reset/tailwind.css'

import './assets/css/style.css'

import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
