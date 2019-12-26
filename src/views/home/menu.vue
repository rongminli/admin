<template>
	<div class="menu-container">
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			background-color="rgba(255, 250, 240)"
			text-color="#101010"
			active-text-color="#101010"
		>
			<el-menu-item index="2">
				<i class="el-icon-food"></i>
				<span slot="title">我的作品</span>
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-monitor" style="color:#101010 ;"></i>
					<span>系统管理</span>
				</template>
				<el-menu-item index="2">
					<i class="el-icon-user"></i>
					<span slot="title">用户管理</span>
				</el-menu-item>
				<el-menu-item index="2">
					<i class="el-icon-lock"></i>
					<span slot="title">权限管理</span>
				</el-menu-item>
				<el-menu-item index="2">
					<i class="el-icon-suitcase-1"></i>
					<span slot="title">资源管理</span>
				</el-menu-item>
			</el-submenu>
			<el-menu-item index="2">
				<i class="el-icon-water-cup"></i>
				<span slot="title">我的账户</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'menu'
};
</script>

<style scoped>
.menu-container {
	min-width: 100% !important;
	border-radius: 10px;
	/* border: solid 5px #e6e6e6 !important; */
	overflow: hidden;
	padding: 10px 5px;
	background: rgba(255, 250, 240);
}
.el-menu {
	border: solid 0px #e6e6e6 !important;
}
.el-submenu .el-menu-item {
	min-width: 100% !important;
}
.el-submenu ,
.el-menu-item{
	border-radius: 5px;
	overflow: hidden;
}
</style>
