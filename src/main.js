import Vue from 'vue';
import App from './App.vue';
import { message1, message2 } from './VarStrind';
import messageFunction from './Fun';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

messageFunction(message1);
messageFunction(message2);
