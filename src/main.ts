import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import RouterInterceptor from './plugins/router-interceptor'
import './assets/scss/main.scss'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
library.add(fab, fas)
dom.watch()

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//Pinia store
import { createPinia } from 'pinia'

const store = createPinia()

//Use EventBus in vue 3
import mitt from 'mitt';
import VueCookies from 'vue-cookies'
const emitter = mitt();
const firebaseConfig = {
  apiKey: "AIzaSyAqbYDyWOGWVDhb5I4sG1M3wuD06gMO9XA",
  authDomain: "brain-loss.firebaseapp.com",
  databaseURL: "https://brain-loss-default-rtdb.firebaseio.com",
  projectId: "brain-loss",
  storageBucket: "brain-loss.appspot.com",
  messagingSenderId: "672359609783",
  appId: "1:672359609783:web:d7a5fd061422a773192432",
  measurementId: "G-CM3E60RV28"
};

const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);

const app = createApp(App)
  .use(router)
  .use(store)
  .use(RouterInterceptor)
  .use(ElementPlus)
  .use(VueCookies, {})
  .component("font-awesome-icon", FontAwesomeIcon)

app.config.globalProperties.$emitter = emitter
app.config.globalProperties.$cookies = VueCookies
app.mount('#app')
