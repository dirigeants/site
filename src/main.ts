import Vue from 'vue';
import Buefy from 'buefy';
import HighlightJS from './utils/highlightJS';
import App from './App.vue';
import router from './router';
import './utils/fontAwesome';

Vue.use(Buefy, { defaultIconComponent: 'font-awesome-icon', defaultIconPack: 'fas' });
Vue.use(HighlightJS);

Vue.config.productionTip = false;
new Vue({
	router,
	render: createElement => createElement(App)
}).$mount('#app');
