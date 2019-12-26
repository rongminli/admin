<template>
	<div id="app">
		<div id="page">
			<Login />
			<Home />
		</div>
	</div>
</template>

<script>
import Login from './views/login.vue';
import Home from './views/home';

export default {
	name: 'app',
	components: {
		Login,
		Home
	}
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
* {
	margin: 0;
	padding: 0;
}
</style>

<style scoped>
#page {
	width: 100%;
	height: 100vh;
}
</style>
