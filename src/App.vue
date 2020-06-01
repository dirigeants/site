<template>
	<div id="app">
		<section class="hero is-info shadow">
			<div class="hero-head">
				<navbar/>
			</div>
		</section>

		<div class="container">
			<router-view/>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Navbar from './components/Navbar.vue';

@Component({
	name: 'App',
	components: { Navbar }
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
    $dark: #23272A;

    html,
    body {
        background-color: $dark !important;
        color: white !important;
    }

    .shadow {
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    }
</style>
