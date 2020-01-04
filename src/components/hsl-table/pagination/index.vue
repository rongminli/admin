<template>
  <el-pagination
    :hide-on-single-page="true"
    :current-page="currentPage"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40, 50, 60, 70]
      }
    },
    pageSize: {
      type: Number,
      default: 20
    },
    total: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleSizeChange(newPageSize) {
      this.$emit('handleSizeChange', { newPageSize: newPageSize })
    },
    handleCurrentChange(currentPage) {
      this.$emit('handleCurrentChange', { currentPage: currentPage })
    }
  }
}
</script>
<style>

</style>
