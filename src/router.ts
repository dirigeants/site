import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('./views/Home.vue');
const UnknownRoute = () => import('./views/UnknownRoute.vue');

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
