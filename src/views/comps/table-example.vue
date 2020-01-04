<template>
	<div class="tableExample">
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
				    { field: 'index' },
				    { field: 'username', width: 150, editable: true, type: String, label: '用户名' },
				    { field: 'age', width: 150, editable: true, type: String, label: '年龄' },
				    { field: 'createTime', width: 200, editable: false, type: Date, label: '创建日期' }
				  ],
				  search: { searchPlaceholder: '按照名称搜索', fields: ['name'] },
				  apiSrc: 'testListData'
				}
			}
		}
	}
</script>

<style>
	.tableExample {
		width: 100%;
		padding: 20px;
	}
</style>
