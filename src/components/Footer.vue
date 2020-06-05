<template>
	<footer class="footer is-dark">
		<div class="container">
			<div class="content has-text-centered">
				<h4> <strong> Let's stop reinventing the wheel, and start coding the bots of our dreams! </strong> </h4>
				<div class="columns">
					<div class="column">
						<a href="https://www.npmjs.com/package/klasa" class="button is-danger">
							<span>Published using:</span>
              <font-awesome-icon :icon="['fab', 'npm']" pull="right"/>
						</a>
					</div>
					<div class="column">
						<a href="https://www.patreon.com/klasa" class="button is-patreon">
							<span>Support Klasa:</span>
              <font-awesome-icon :icon="['fab', 'patreon']" pull="right"/>
						</a>
					</div>
          <div class="column">
						<a class="button is-dark" @click="toggleDark()">
							<span>{{ dark ? "Light" : "Dark" }} Mode</span>
              <font-awesome-icon :icon="dark ? 'sun' : 'moon'" pull="right"/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import App from '../App.vue';

@Component
export default class Footer extends Vue {

	get dark(): boolean {
		return (this.$parent as App).dark;
	}

	toggleDark(): void {
		(this.$parent as App).dark = !(this.$parent as App).dark;
		localStorage.setItem('dark', String((this.$parent as App).dark));
	}

}
</script>
