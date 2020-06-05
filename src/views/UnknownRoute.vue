<template>
	<div class="container">
		<section class="section has-text-centered">
			<unknown-page type="route" />
		</section>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// Components
import UnknownPage from '../components/UnknownPage.vue';

const UnknownRouteVue = Vue.extend({
	components: { UnknownPage }
});

@Component
export default class UnknownRoutePage extends UnknownRouteVue {}
</script>
