import { createRouter, createWebHistory } from 'vue-router'
// import { useRoute, useRouter } from 'vue-router'
// const route = useRoute(); // route 对应了 vue2 中的 $route 对象
// const router = useRouter(); // router 对应了 vue2 中的 $router 对象
import Theme from '../components/Theme.vue'
import HelloWorld from '../components/HelloWorld.vue'

const router = createRouter({
  // ...
  history: createWebHistory(),
  routes: [
    // pathMatch 是参数的名称，例如，跳转到 /not/found 会得到
    // { params: { pathMatch: ['not', 'found'] } }
    // 这要归功于最后一个 *，意思是重复的参数，如果你
    // 打算直接使用未匹配的路径名称导航到该路径，这是必要的
    // 如果你省略了最后的 `*`，在解析或跳转时，参数中的 `/` 字符将被编码
    { path: '/hello-world', name: 'hello-world', component: HelloWorld },
    { path: '/:pathMatch(.*)*', name: 'theme', component: Theme },
  ]
})

export default router