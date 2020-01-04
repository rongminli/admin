<template>
  <div class="toolbar-container">
    <el-button id="newBtn" type="primary" size="mini" icon="el-icon-plus" @click="newData()" />
    <el-button id="newBtn" type="primary" size="mini" icon="el-icon-refresh" @click="refresh()" />
    <div class="search-tem">
      <div class="search-btn">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="search()">搜索</el-button>
      </div>
      <div class="search-input">
        <el-input
          v-model="searchText"
          size="mini"
          clearable
          :placeholder="config.searchPlaceholder"
          prefix-icon="el-icon-search"
          @keyup.enter.native="search()"
          @clear="searchTextClear"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    config: {
      type: Object,
      default: () => { return {} }
    }
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchText)
    },
    newData() {
      this.$emit('newData')
    },
    refresh() {
      this.$emit('refresh')
    },
    searchTextClear() {
      this.$emit('searchTextClear')
    }
  }
}
</script>

<style lang="scss" scoped>
  .toolbar-container{
    margin-bottom: 2px;
    padding-left: 10px;
    overflow:hidden //使之可以被父元素撑开
  }
  .search{
    &-tem{
      float: right;
    }
    &-input{
      float: right;
      widows: 300px;
    }
    &-btn{
      float: right;
      margin-left: 2px
    }
  }
</style>

