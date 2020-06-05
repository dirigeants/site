<template>
	<nav class="navbar is-light is-radiusless is-paddingless">
		<div class="container">
			<div class="navbar-brand">
        <b-field class="navbar-item">
            <b-select placeholder="Module">
                <option>
                    @klasa/core
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

@Component
export default class DocsNavbar extends Vue {}
</script>

<style lang="scss" scoped>
  .pull-right {
    margin-left: auto;
  }
</style>
