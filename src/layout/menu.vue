<template>
	<div class="menu-container">
		<el-menu default-active="2" @open="handleOpen" @close="handleClose" background-color="rgb(240, 235, 210)" text-color="#101010" active-text-color="#101010" router>
			<div v-for="(item,index) in permission_routes" :key="index">
				<div v-if="!item.hidden || item.children">
					<div v-for="(children,index) in item.children" :key="index">
						<div v-if="!children.hidden">
							<div v-if="children.children">
								<el-submenu :index="children.path">
									<template slot="title">
										<i :class="children.meta.icon" style="color:#101010 ;"></i>
										<span>{{ children.meta.title }}</span>
									</template>
									<div v-for="(children1,index) in children.children" :key="index">
										<el-menu-item :index="children1.path">
											<i :class="children1.meta.icon" style="color:#101010 ;"></i>
											<span slot="title">{{ children1.meta.title }}</span>
										</el-menu-item>
									</div>
								</el-submenu>
							</div>
							<div v-else>
								<el-menu-item :index="children.path">
									<i :class="children.meta.icon" style="color:#101010 ;"></i>
									<span slot="title">{{ children.meta.title }}</span>
								</el-menu-item>
							</div>
						</div>
					</div>
				</div>
			</div>
		</el-menu>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Menu',
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
.el-menu {
	border: solid 0px #e6e6e6 !important;
}
.el-submenu .el-menu-item {
	min-width: 100% !important;
}
.el-submenu,
.el-menu-item {
	border-radius: 5px;
	overflow: hidden;
}
</style>
