<template>
	<div class="log-container">
		<h2> 更新日志———前端：</h2>
		<div class="item" v-for="(item,index) in updateLog" :key='index'>
			<h3>{{item.time}} &nbsp; {{item.title}} ---{{item.author}}</h3>
			<div class="content" v-for="(content,index) in item.content" :key="index">
				{{index+1}}.{{content}}
			</div>
		</div>
	</div>
</template>

<script>
	import updateLog from '@/update_log.js'
	export default {
		name: 'UpdateLog',
		data(){
			return {
				updateLog: updateLog
			}
		}
	}
</script>

<style scoped>
	.log-container{
		padding: 40px;
	}
	.item{
		margin-left: 2em;
		margin-bottom: 50px;
	}
	h3 {
		margin: 20px auto;
		font-weight: 400;
		font-size: 15px;
	}
	.content{
		margin-left: 20px;
		margin-bottom: 5px;
		font-weight: 200;
		font-size: 12px;
	}
</style>
