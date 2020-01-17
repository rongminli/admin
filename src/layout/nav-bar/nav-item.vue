<template>
	<div class="nav-item"><i :class="route.meta.icon"></i>{{route.meta.title}}</div>
</template>

<script>
export default {
	name: 'NavBar',
	props: {
		route: {
			type: Object,
			request: true
		}
	}
};
</script>

<style>
.nav-item {
	display: inline-block;
}
</style>
