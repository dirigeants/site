<template>
	<div class="content">
		<h1>Unknown {{ type || 'page' }}</h1>
		<p>This page doesn't actually exist. <b-icon icon="frown" /></p>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	name: 'UnknownPage',
	props: { type: String }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
</style>
