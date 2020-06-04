<template>
	<footer class="footer">
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
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({ name: 'Footer' })
export default class Footer extends Vue {}
</script>
