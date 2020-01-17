<template>
	<div v-if="!router.hidden">
		<div v-if="router.children">
			<el-submenu :index="router.path">
				<template slot="title">
					<i :class="router.meta.icon" style="color:#101010 ;"></i>
					<span>{{ router.meta.title }}</span>
				</template>
				<div v-for="(children, index) in router.children" :key="index" @click="handleClick(children)">
					<el-menu-item :index="children.path">
						<i :class="children.meta.icon" style="color:#101010 ;"></i>
						<span slot="title">{{ children.meta.title }}</span>
					</el-menu-item>
				</div>
			</el-submenu>
		</div>
		<div v-else>
			<el-menu-item :index="router.path" @click="handleClick(router)">
				<i :class="router.meta.icon" style="color:#101010 ;"></i>
				<span slot="title">{{ router.meta.title }}</span>
			</el-menu-item>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	name: 'MenuItem',
	props: {
		router: {
			type: Object,
			required: true
		}
	},
	methods: {
		...mapMutations({
			addRouter: 'openedRoutes/ADD_ROUTE'
		}),
		handleClick(route) {
			console.log(route)
			this.addRouter(route);
		}
	}
};
</script>

<style>
.el-submenu .el-menu-item {
	min-width: 100% !important;
}
.el-submenu,
.el-menu-item {
	border-radius: 5px;
	overflow: hidden;
}
</style>
