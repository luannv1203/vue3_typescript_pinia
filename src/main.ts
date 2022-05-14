import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import RouterInterceptor from './plugins/router-interceptor'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'ant-design-vue/dist/antd.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//Pinia store
import { createPinia } from 'pinia'

const store = createPinia()

const app = createApp(App)
  .use(router)
  .use(store)
  .use(RouterInterceptor)
  .use(Antd)
  .component("font-awesome-icon", FontAwesomeIcon)
  
app.mount('#app')
