import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import UnknownRoute from './views/UnknownRoute.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	// Catch-all
	{ path: '*', component: UnknownRoute }
];

const router = new VueRouter({
	routes,
	mode: 'history',
	base: '/site'
});

export default router;
