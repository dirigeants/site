<template>
	<nav class="navbar is-light is-radiusless is-paddingless">
		<div class="container">
			<div class="navbar-brand">
				<b-field class="navbar-item">
					<b-select v-model="sourceChoice" :placeholder="sourceChoice">
						<option v-for="(src, index) in sources" :key="index" :value="src.id">
							{{ src.name }}
						</option>
					</b-select>
				</b-field>

				<b-field class="navbar-item" type="is-light">
					<b-select v-model="tagChoice" :placeholder="tagChoice" :loading="!tags">
						<option v-for="(tag, index) in tags" :key="index" :value="tag">
							{{ tag }}
						</option>
					</b-select>
				</b-field>

        <div class="navbar-item is-hidden-desktop pull-right">
					<font-awesome-icon :icon="['fas', 'search']" pull="left"/>
				</div>
			</div>

			<div class="navbar-end">
				<b-field class="navbar-item is-hidden-touch">
						<b-input placeholder="Search" type="search" icon-pack="fas" icon="search"/>
				</b-field>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { DocsSource } from '../../data/DocsSource';

const DocsNavbarVue = Vue.extend({ props: {
	source: DocsSource,
	sources: Object
} });

@Component
export default class DocsNavbar extends DocsNavbarVue {

	sourceChoice = this.source.id;
	tagChoice = this.source.defaultVersion;

	tags: string[] | null = null;

	async beforeMount(): Promise<void> {
		await this.loadTags();
	}

	async loadTags(): Promise<void> {
		this.tags = this.source.tags;
		if (!this.tags) {
			const startSource = this.source;
			const tags = await this.source.fetchTags();
			if (this.source.id === startSource.id) this.tags = tags as string[];
		}
	}

}
</script>
