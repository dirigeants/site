import Vue from 'vue';
import Buefy from 'buefy';
import HighlightJS from './utils/highlightJS';
import App from './App.vue';
import router from './router';

Vue.use(HighlightJS);
Vue.use(Buefy, { defaultIconPack: 'fa' });

Vue.config.productionTip = false;

new Vue({
	router,
	render: createElement => createElement(App)
}).$mount('#app');
