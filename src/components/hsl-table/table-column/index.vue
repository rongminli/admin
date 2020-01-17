<template>
	<div>
		<template v-if="column.field === 'index'">
			<el-table-column  align="center" label="INDEX" width="95">
				<template slot-scope="scope">
					{{ scope.$index + 1 }}
				</template>
			</el-table-column>
		</template>
		<template v-else>
			<el-table-column  :label="column.label" :width="column.width" align="center">
				<template slot-scope="scope">
					<template v-if="column.editable">
						<el-input v-if="scope.row.actionState == 'edit'" v-model="scope.row[column.field]" :placeholder="column.label" />
						<div v-else>
							<template v-if="column.type == Date">
								{{ scope.row[column.field] | date('%F') }}
							</template>
							<template v-else>
								{{ scope.row[column.field] }}
							</template>
						</div>
					</template>
					<template v-else>
						<template v-if="column.type == Date">
							{{ scope.row[column.field] | date('%F') }}
						</template>
						<template v-else>
							{{ scope.row[column.field] }}
						</template>
					</template>
				</template>
			</el-table-column>
		</template>
	</div>
</template>

<script>
export default {
	name: 'TableColumn',
	props: {
		column: {
			type: Object,
			request: true
		}
	}
};
</script>

<style scoped></style>
