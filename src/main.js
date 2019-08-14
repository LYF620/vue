import Vue from 'vue'
import App from './App.vue'
import router from './root/rooter.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'jquery';

Vue.use(MintUI);
require("./mock/mock");
// require("../build/socket");
Vue.prototype.getViewportSize = function(){
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
};
Vue.prototype.$ = jQuery;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
