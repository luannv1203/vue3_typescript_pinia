import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import RouterInterceptor from './plugins/router-interceptor'
import 'ant-design-vue/dist/antd.css';
import './assets/scss/main.scss'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)
dom.watch()

//Pinia store
import { createPinia } from 'pinia'

const store = createPinia()

//Use EventBus in vue 3
import mitt from 'mitt';
const emitter = mitt();

const app = createApp(App)
  .use(router)
  .use(store)
  .use(RouterInterceptor)
  .use(Antd)
  .component("font-awesome-icon", FontAwesomeIcon)

app.config.globalProperties.$emitter = emitter
app.mount('#app')
