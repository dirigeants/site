import hljs from 'highlight.js';
import { PluginObject, PluginFunction } from 'vue';
import Vue from 'vue/types';
import { DirectiveBinding } from 'vue/types/options';

const install: PluginFunction<null> = (vue: typeof Vue): void => {
	vue.directive('highlightjs', {
		bind: highlight,
		componentUpdated: highlight
	});
};

function highlight(el: HTMLElement, binding: DirectiveBinding) {
	const targets = el.querySelectorAll('code');

	for (const target of targets) {
		if (typeof binding.value === 'string') target.textContent = binding.value;
		hljs.highlightBlock(target);
	}
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export default { install } as PluginObject<null>;
