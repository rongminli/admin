<template>
	<div class="container">
		<div class="left">
			<div class="title"><h1>红树林</h1></div>
			<Menu />
		</div>
		<div class="right">
			<NavBar/>
			<div class="main">
				<transition name="fade" mode="out-in">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</transition>
			</div>
		</div>
		<user />
	</div>
</template>

<script>
import user from './user.vue';
import Menu from './menu';
import NavBar from './nav-bar';
export default {
	name: 'Layout',
	components: { Menu, user, NavBar }
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
	position: relative;
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
	position: relative;
}

.main {
	width: 100%;
	min-height: calc(100vh - 200px);
	background: rgb(240, 235, 210);
	border-radius: 10px;
	position: absolute;
	overflow-x: auto;
}

.title {
	text-align: center;
	background: rgba(155, 150, 140);
	margin: 0 auto 10px;
	border-radius: 10px;
}
.title h1 {
	line-height: 2em;
	color: #101010;
}


</style>
