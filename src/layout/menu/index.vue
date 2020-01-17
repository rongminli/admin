<template>
	<div class="menu-container">
		<el-menu default-active="2" @open="handleOpen" @close="handleClose" background-color="rgb(240, 235, 210)" text-color="#101010" active-text-color="#101010" router>
			<MenuItem v-for="(item, index) in permission_routes" :key="index" :router="item"></MenuItem>
		</el-menu>
	</div>
</template>

<script>
import MenuItem from './menu-item.vue';
import { mapGetters } from 'vuex';
export default {
	name: 'Menu',
	components: { MenuItem },
	computed: {
		...mapGetters(['permission_routes'])
	},
	methods: {
		handleOpen(pro) {
			console.log(pro);
		},
		handleClose(pro) {
			console.log(pro);
		}
	}
};
</script>

<style scoped>
.menu-container {
	min-width: 100% !important;
	border-radius: 10px;
	padding: 10px 5px;
	background: rgb(240, 235, 210);
}
</style>
