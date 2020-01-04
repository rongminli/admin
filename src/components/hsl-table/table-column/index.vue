<template>
	<template v-if="colum.field === 'index'">
		<el-table-column :key="index" align="center" label="INDEX" width="95">
			<template slot-scope="scope">
				{{ scope.$index + 1 }}
			</template>
		</el-table-column>
	</template>
	<template v-else>
		<el-table-column :key="index" :label="colum.label" :width="colum.width" align="center">
			<template slot-scope="scope">
				<template v-if="colum.editable">
					<el-input v-if="scope.row.actionState == 'edit'" v-model="scope.row[colum.field]" :placeholder="colum.label" />
					<div v-else>
						<template v-if="colum.type == Date">
							{{ scope.row[colum.field] | date('%F') }}
						</template>
						<template v-else>
							{{ scope.row[colum.field] }}
						</template>
					</div>
				</template>
				<template v-else>
					<template v-if="colum.type == Date">
						{{ scope.row[colum.field] | date('%F') }}
					</template>
					<template v-else>
						{{ scope.row[colum.field] }}
					</template>
				</template>
			</template>
		</el-table-column>
	</template>
</template>

<script>
	export default {
		name:''
	}
</script>

<style scoped>
</style>
