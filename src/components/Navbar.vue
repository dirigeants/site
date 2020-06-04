<template>
	<nav class="navbar is-info">
		<div class="container">
			<div class="navbar-brand">
				<router-link id="logo" class="navbar-item is-5 title is-marginless" to="/">
					<img src="../assets/klasa_logo.svg" alt="Klasa Logo"> &nbsp;Klasa
				</router-link>

				<router-link class="navbar-item is-hidden-desktop pull-end" to="/docs">
					<font-awesome-icon icon="book" size="lg"/>
				</router-link>

				<a class="navbar-item is-hidden-desktop" href="https://github.com/dirigeants" target="_blank">
					<font-awesome-icon :icon="['fab', 'github']" size="lg"/>
				</a>

				<a class="navbar-item is-hidden-desktop" @click="invite()" target="_blank">
					<font-awesome-icon :icon="['fab', 'discord']" size="lg"/>
				</a>
			</div>

			<div class="navbar-end">
				<router-link class="navbar-item is-hidden-touch" to="/docs">
					<font-awesome-icon icon="book" size="lg"/>
					<span class="nav-item-text"> Docs </span>
				</router-link>

				<a class="navbar-item is-hidden-touch" href="https://github.com/dirigeants" target="_blank">
					<font-awesome-icon :icon="['fab', 'github']" size="lg"/>
					<span class="nav-item-text"> Github </span>
				</a>

				<a class="navbar-item is-hidden-touch" @click="invite()" target="_blank">
					<font-awesome-icon :icon="['fab', 'discord']" size="lg"/>
					<span class="nav-item-text"> Discord </span>
				</a>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AppC from '../App.vue';

@Component({ name: 'Navbar' })
export default class Navbar extends Vue {

	get invite(): () => void {
		return (this.$parent as AppC).invite;
	}

}
</script>

<style lang="scss" scoped>
		.navbar-item {
				margin-right: unset;
				.icon {
						justify-content: unset;
						margin-right: 0.15em;
				}
		}

		.pull-end {
				margin-left: auto;
		}

		#logo img {
				height: 66px;
				margin: auto;
				margin-right: 0.25em;
		}

		.nav-item-text {
			margin-left: 0.35em;
		}
</style>
