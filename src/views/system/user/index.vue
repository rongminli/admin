<template>
	<div class="user-table">
		<hslTable :config='tablConfig'/>
	</div>
</template>

<script>
	import hslTable from '@/components/hsl-table'
	export default {
		name: 'tableExample',
		components:{ hslTable },
		data(){
			return {
				tablConfig: {
				  columns: [
				    // { field: 'index' },
				    { field: 'username', width: 100, editable: true, type: String, label: '用户名' },
				    { field: 'age', width: 60, editable: true, type: String, label: '年龄' },
				    { field: 'createTime', width: 150, editable: false, type: Date, label: '创建日期' }
				  ],
				  search: { searchPlaceholder: '按照名称搜索', fields: ['name'] },
				  apiSrc: 'testListData'
				}
			}
		}
	}
</script>

<style>
	.user-table {
		width: 600px;
		padding: 20px;
		margin-left: 40px;
	}
</style>
