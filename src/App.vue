<template>
	<div id="app">
		<div id="page">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

export default {
	name: 'app',
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
  overflow-y: scroll;
}
*, *::before, *::after {
  box-sizing: inherit;
}
* {
	margin: 0;
	padding: 0;
}
body{
	background-color: #fffaf0;
}
</style>

<style scoped>
#page {
	width: 100%;
	height: 100vh;
}
</style>
