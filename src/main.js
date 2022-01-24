import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import router from './router'

// Vue.use(ElementPlus); // Vue.use is not defined ???
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }
// const routes = [
//   { path: '/', component: Home },
//   { path: '/about', component: About },
// ]
// const router = VueRouter.createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: VueRouter.createWebHashHistory(),
//   routes, // short for `routes: routes`
// })

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')