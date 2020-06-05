<template>
	<nav class="navbar is-light is-radiusless is-paddingless">
		<div class="container">
			<div class="navbar-brand">
				<b-field class="navbar-item">
					<b-select v-model="sourceChoice" :placeholder="source.id">
						<option v-for="(src, index) in sources" :key="index" :value="src.id">
							{{ src.name }}
						</option>
					</b-select>
				</b-field>

        <div class="navbar-item is-hidden-desktop pull-right">
					<font-awesome-icon :icon="['fas', 'search']" pull="left"/>
				</div>
			</div>

			<div class="navbar-end">
				<b-field class="navbar-item is-hidden-touch">
						<b-input v-model="search" placeholder="Search" type="search" icon-pack="fas" icon="search"/>
				</b-field>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const DocsNavbarVue = Vue.extend({ props: ['sources', 'source'] });

@Component
export default class DocsNavbar extends DocsNavbarVue {}
</script>
