<template>
	<transition name="fade">
		<div class="go-to-top" @click="scrollToTop" v-if="show">
			<svg class="icon-top" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
				stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter">
				<path d="M39.6 30.557 24.043 15 8.487 30.557"></path>
			</svg>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const threshold = 300;
const scrollTop = ref(0);
const show = computed(() => scrollTop.value > threshold);

const getScrollTop = () => document.documentElement.scrollTop || document.body.scrollTop || 0;

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
	scrollTop.value = 0;
};

const debounce = (func: Function, timeout = 300) => {
	let timer: any;
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(null, args);
		}, timeout);
	};
};

onMounted(() => {
	scrollTop.value = getScrollTop();
	window.addEventListener(
		'scroll',
		debounce(() => {
			scrollTop.value = getScrollTop();
		}, 100)
	);
});
</script>
