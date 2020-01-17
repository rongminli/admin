<template>
	<div class="nav-bar">
		<div :class="{ home: true, isActive: '/' == $route.path }">
			<router-link to="/">
				<p class="tag">
					<i class="el-icon-house"></i>
					首页
				</p>
			</router-link>
		</div>
		<div v-for="route in openedRoutes" :key="route.path" :class="{ 'nav-item': true, isActive: route.path == $route.path }">
			<router-link :to="route.path">
				<p class="tag">
					<i :class="route.meta.icon"></i>
					{{ route.meta.title }}
				</p>
			</router-link>
			<p class="close-btn" @click="close(route)"><i class="el-icon-close"></i></p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import NavBar from './nav-item.vue';
export default {
	name: 'NavBar',
	components: { NavBar },
	computed: {
		...mapGetters(['openedRoutes'])
	},
	methods: {
		...mapMutations({
			REMOVE_ROUTE: 'openedRoutes/REMOVE_ROUTE'
		}),
		close(route) {
			this.REMOVE_ROUTE(route);
		}
	}
};
</script>

<style scoped>
.nav-bar {
	margin-bottom: 10px;
	overflow: hidden;
}
.home {
	display: inline-block;
	background-color: rgba(230, 230, 188, 0.7);
	border-radius: 5px;
	line-height: 2em;
	margin-left: 0;
	width: 5em;
	text-align: center;
	margin-right: 10px;
}
.home .tag {
	padding-right: 1em !important;
	font-weight: 600;
	color: #1010108c;
	outline: none;
	text-align: center;
	display: inline-block;
}
.nav-item {
	display: inline-block;
	margin-right: 10px;
	margin-bottom: 5px;
	font-size: 15px;
	transition: 0.2s;
	position: relative;
	border-radius: 5px;
	background-color: rgba(230, 230, 188, 0.7);
}

.nav-item:hover {
	background-color: rgba(200, 200, 158, 1);
}

.nav-item .tag {
	padding-left: 1em;
	padding-right: 2em;
	display: inline-block;
	max-width: 10em;
	min-width: 7em;
	text-align: left;
	line-height: 2em;
	font-weight: 600;
	letter-spacing: 2px;
	white-space: nowrap;
	/* overflow: hidden; */
	color: #1010108c;
}

.close-btn {
	position: absolute;
	font-size: inherit;
	border-radius: 50px;
	visibility: hidden;
	display: inline-block;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);
	width: 1.25em;
	line-height: 1.25em;
	color: #ffffff;
	text-align: center;
	background-color: rgba(170, 200, 158, 1.5);
}

.close-btn:hover {
	background-color: rgba(170, 200, 158, 1);
}

.nav-item:hover .close-btn {
	visibility: visible;
}

.isActive {
	background-color: rgba(200, 200, 158, 1);
}
.isActive .tag {
	color: #10ab23;
}
</style>
