<template>
	<div class="container">
		<div class="left">
			<div class="title"><h1>红树林</h1></div>
			<Menu />
		</div>
		<div class="right">
			<div class="main">
				<RegularHexahedron/>
			</div>
		</div>
	</div>
</template>

<script>
import Menu from './menu.vue';
import RegularHexahedron from '@/components/ops/regular-hexahedron.vue'
export default {
	name: 'Home',
	components: { Menu, RegularHexahedron }
};
</script>

<style scoped>
.container {
	min-width: 1000px;
	max-width: 1280px;
	width: 80%;
	margin: 0 auto;
	height: 100vh;
	display: flex;
}
.head {
	height: 80px;
	background: #00b0e8;
}
.left,
.right {
	margin-top: 100px;
}
.left {
	float: left;
	width: 235px;
	padding-right: 20px;
}
.right {
	flex: 1;
}

.main {
	width: 100%;
	min-height: 500px;
	background: rgba(255, 250, 240);
	border-radius: 10px;
}

.title {
	text-align: center;
	background: rgba(155, 150, 140);
	margin: 0 auto 20px;
	border-radius: 10px;
}
.title h1 {
	line-height: 2em;
	color: #101010;
}
</style>
