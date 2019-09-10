import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**
 * 饿了么UI
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/**
 * Vue粒子特效
 */
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')