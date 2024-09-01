import { h, render } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import BackToTop from './back-to-top.vue';

const backToTop = () => {
	if (typeof Window === 'undefined') return;

	window.addEventListener('load', () => {
		const wrapper = document.createElement('div');
		document.body.appendChild(wrapper);
		render(h(BackToTop), wrapper);
	});
};

export default {
	extends: DefaultTheme,
	Layout: () => h(DefaultTheme.Layout, null),
	enhanceApp: () => backToTop()
} satisfies Theme;
