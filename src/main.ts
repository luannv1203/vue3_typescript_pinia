import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import RouterInterceptor from './plugins/router-interceptor'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import 'ant-design-vue/dist/antd.css';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab)
dom.watch()

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
