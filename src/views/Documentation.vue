<template>
	<div>
		<docs-navbar :sources="sources" :source="source" />
		<router-view :source="source" :tag="tag" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// Components
import DocsNavbar from '../components/docs/Navbar.vue';

// Sources
import WSSource from '../data/WSSource';

const DocumentatonVue = Vue.extend({ components: { DocsNavbar } });

@Component
export default class DocumentationPage extends DocumentatonVue {

	sources = {
		[WSSource.id]: WSSource
	}

	source = WSSource;

	tag = WSSource.defaultVersion;

}
</script>
