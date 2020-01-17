<template>
	<div class="hsl-table">
		<toolbar :text="config.search.text" @newData="defaultHandleAddBtn" @refresh="refresh" @search="search" @searchTextClear="refreshCancel" />
		<el-table v-loading="loading" :data="tableDataList" :stripe="true" element-loading-text="Loading" border fit highlight-current-row @row-dblclick="hendRowDBlclick">
			<TableColumn v-for="(column, index) in config.columns" :column="column" />
			<el-table-column fixed="right" label="操作" align="center">
				<template slot-scope="scope">
					<el-button-group>
						<el-button v-if="scope.row.actionState != 'edit'" type="primary" size="mini" icon="el-icon-edit" @click="defaultHandleEditBtn(scope.row)" />
						<el-button v-if="scope.row.actionState == 'loading'" type="primary" size="mini" icon="el-icon-loading" />
						<el-button v-if="scope.row.actionState == 'edit'" type="primary" size="mini" icon="el-icon-upload2" @click="pushData(scope.$index)" />
						<el-button v-if="scope.row.actionState != 'edit'" type="danger" size="mini" icon="el-icon-delete" @click="del(scope.$index)" />
						<el-button v-if="scope.row.actionState == 'edit'" type="info" size="mini" icon="el-icon-delete" @click="editCancel(scope.$index)" />
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>
		<pagination :total="pageInfo.total" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange" />
	</div>
</template>

<script>
import { Message } from 'element-ui';
import pagination from './pagination/index';
import PageInfo from './pagination/PageInfo';
import toolbar from './toolbar/index';

import TableColumn from './table-column/index.vue';

import _ from 'lodash';

let api = {};
const importApi = (srcRUL, CB) => {
	import(`@/api/${srcRUL}`).then(re => {
		api = re.default;
		CB();
	});
};

export default {
	components: { pagination, toolbar, TableColumn },
	props: {
		config: {
			type: Object,
			required: true
		},
		handleEdit: {
			type: Function,
			default: () => {
				return true;
			}
		},
		handleAdd: {
			type: Function,
			default: () => {
				return true;
			}
		}
	},
	data() {
		return {
			dataIsBackuped: false,
			dataListBackUp: [],
			pageInfoBackUp: {},

			pageInfo: new PageInfo(),
			dataList: [],
			tableDataList: [],

			selectedRow: {},
			loading: true
		};
	},
	created() {
		importApi(this.config.apiSrc, () => {
			this.fetchData().then(_ => {
				this.loadData();
			});
		});
	},
	methods: {
		defaultHandleAddBtn() {
			// 这个你可能看不懂，我就不解释了
			// 是否执行默认行为
			if (this.handleAdd()) {
				this.newData();
			}
		},
		/** 默认按编辑按钮事件处理器 */
		defaultHandleEditBtn(row) {
			// 是否执行自定义行为
			if (this.handleEdit(row)) {
				row.actionState = 'edit';
			}
		},
		/** 页面条数改变事件 */
		handleSizeChange(props) {
			this.pageInfo.pageSize = props.newPageSize;
			this.loadData();
		},
		/** 翻页事件 */
		handleCurrentChange(props) {
			this.pageInfo.pageNum = props.currentPage;
			this.loadData();
		},
		/** 从前台数据缓存加载数据 */
		loadData() {
			var start = (this.pageInfo.pageNum - 1) * this.pageInfo.pageSize;
			var end = start + this.pageInfo.pageSize;
			this.tableDataList = _.clone(this.dataList.slice(start, end));
		},
		/** 加载全部数据到前台缓存中 */
		fetchData() {
			this.loading = true;
			return api.findByPage({}, this.pageInfo).then(response => {
				this.dataList = _.clone(response.pageEntities);
				this.pageInfo.total = response.pageInfo.total;
				this.loading = false;
			});
		},
		/** 从后台加载当前页的下一页  */
		nextPage() {
			var pageInfo = clone(this.pageInfo);
			pageInfo.pageNum++;
			return api.getByPage(pageInfo).then(response => {
				this.dataList = this.dataList.concat(clone(response.data.list));
				this.pageInfo.total = response.data.pageInfo.total;
			});
		},
		/** 新增数据 */
		newData() {
			this.tableDataList.unshift({
				actionState: 'edit'
			});
		},
		/** 往后台推送数据 */
		pushData(index) {
			var row = this.tableDataList[index];
			if (row.id && row.id !== '') {
				api.update(row)
					.then(re => {
						row = re.data.entity;
						arrayUtil.updateBy('id', row, this.dataList);
						row.actionState = 'normal';
						this.tableDataList.splice(index, 1, row);
						this.$emit('update', row);
						Message({
							message: '更新完毕',
							type: 'success',
							duretion: 3 * 1000
						});
					})
					.catch(re => {
						Message({
							message: re.message,
							type: 'error',
							duretion: 3 * 1000
						});
					});
			} else {
				api.add(row)
					.then(re => {
						row = re.data.entity;
						arrayUtil.updateBy('id', row, this.dataList);
						row.actionState = 'normal';
						this.tableDataList.splice(index, 1, row);
						this.$emit('add', row);
						Message({
							message: '新增完成',
							type: 'success',
							duretion: 3 * 1000
						});
					})
					.catch(re => {
						Message({
							message: re.message,
							type: 'error',
							duretion: 3 * 1000
						});
					});
			}
		},
		/** 删除前后台数据 */
		del(index) {
			this.$confirm('确认删除？').then(_ => {
				var row = this.tableDataList[index];
				api.del(row.id).then(re => {
					this.dataList = arrayUtil.delBy('id', row.id, this.dataList);
					this.dataListBackUp = arrayUtil.delBy('id', row.id, this.dataListBackUp);
					this.tableDataList.splice(index, 1);
					this.pageInfo.total--;
					this.loadData();
					this.$emit('del', row);
					Message({
						message: '删除完毕',
						type: 'success',
						duretion: 3 * 1000
					});
				});
			});
		},
		/** 取消编辑，数据恢复到前台保存的状态 */
		editCancel(index) {
			var row = this.tableDataList[index];
			if (row.id) {
				row = arrayUtil.cloneBy({ id: row.id }, this.dataList)[0];
				row.actionState = 'normal';
				this.tableDataList.splice(index, 1, row);
				return;
			}
			this.tableDataList.splice(index, 1);
		},
		/** 从后台加载数据，重新加载当前页 */
		refresh() {
			this.fetchData().then(_ => {
				this.loadData();
			});
		},
		/** 从前台搜索数据 */
		search(searchText) {
			if (!this.dataIsBackuped) this.backupData();
			if (searchText === '') {
				this.refreshCancel();
				return;
			}
			var resultList = arrayUtil.likeBy(
				{
					name: searchText,
					code: searchText
				},
				this.dataListBackUp
			);
			this.dataList = resultList;
			this.pageInfo = new PageInfo();
			this.pageInfo.total = resultList.length;
			this.loadData();
		},
		/** 备份前台数据，为搜索做准备,因为搜索的结果将利用原来的结构来显示 */
		backupData() {
			this.pageInfoBackUp = this.pageInfo;
			this.dataListBackUp = this.dataList;
			this.dataIsBackuped = true;
		},
		/** 恢复到正常的浏览状态 */
		refreshCancel() {
			this.pageInfo = this.pageInfoBackUp;
			this.dataList = this.dataListBackUp;
			this.loadData();
		},
		/** 监听行双击击事件 */
		hendRowDBlclick(row, column, event) {
			this.selectedRow = row;
			this.$emit('rowDBlclick', { row, column, event });
		}
	}
};
</script>
<style></style>
