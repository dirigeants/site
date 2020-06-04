<template>
	<div id="app" class="site">
		<section class="hero is-info shadow">
			<div class="hero-head">
				<navbar/>
			</div>
		</section>

		<div class="container">
			<router-view/>
		</div>

		<app-footer/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

@Component({
	name: 'App',
	components: { Navbar, AppFooter: Footer }
})
export default class App extends Vue {

	invite(): void {
		const popup = window.open('about:blank', '', 'toolbar=no,scrollbars=yes,resizable=yes,width=498,height=666');
		fetch('https://api.klasa.xyz/invite')
			.then(res => res.json())
			.then(({ invite }) => { if (popup) popup.location = invite; });
	}

}
</script>

<style lang="scss">
	.site {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}

	html,
	body {
		background-color: hsl(217, 8%, 10%);
		color: hsl(0, 0%, 52%);
		$light: hsl(217, 20%, 18%);
		$black: hsl(0, 0%, 96%);
		$black-bis: hsl(0, 0%, 93%);
		$black-ter: hsl(0, 0%, 86%);
		$grey-darker: hsl(0, 0%, 83%);
		$grey-dark: hsl(0, 0%, 80%);
		$grey: hsl(0, 0%, 52%);
		$grey-light: hsl(0, 0%, 29%);
		$grey-lighter: hsl(0, 0%, 14%);
		$white-ter: hsl(217, 8%, 10%);
		$white-bis: hsl(217, 8%, 8%);
		$white: hsl(217, 8%, 6%);
		$orange: hsl(14, 100%, 47%);
		$yellow: hsl(48, 100%, 33%);
		$green: hsl(141, 71%, 40%);
		$turquoise: hsl(171, 100%, 35%);
		$cyan: hsl(204, 86%, 45%);
		$blue: hsl(217, 71%, 49%);
		$purple: hsl(271, 100%, 29%);
		$red: hsl(348, 100%, 39%);
		// Import Bulma's core
		@import "~bulma/sass/utilities/_all";
		$menu-item-active-background-color: $info;
		$menu-item-hover-background-color: $light;
		$footer-background-color: $light;
		// Import Bulma and Buefy styles
		@import "~bulma";
		@import "~buefy/src/scss/buefy";
		@import "./main";
		.is-patreon {
			color: $black-ter;
			background-color: $orange;
		}
	}

	@import "~bulma";
	@import "~buefy/src/scss/buefy";
</style>
