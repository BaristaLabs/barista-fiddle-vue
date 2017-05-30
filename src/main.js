// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueCodeMirror from 'vue-codemirror'
import App from './App'
import router from './router'

Vue.use(VueMaterial)
Vue.use(VueCodeMirror)
Vue.config.productionTip = false

Vue.material.registerTheme({
  black: {
    primary: 'black'
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
