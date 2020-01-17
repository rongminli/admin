<template>
	<div class="profiles-container">
			<h3 class="title">用过的头像：</h3>
			<img v-for="portrait in userPortraits" :src="portrait.url" :key="portrait.url" class="portrait" />
			<h3 class="title">基本信息：</h3>
			<img v-for="portrait in userPortraits" :src="portrait.url" :key="portrait.url" class="portrait" />
			<h3 class="title">安全管理：</h3>
			<img v-for="portrait in userPortraits" :src="portrait.url" :key="portrait.url" class="portrait" />
	</div>
</template>

<script>
	export default {
		name: 'profiles',
		data(){
			return {
				userPortraits:[
					{
						url: '../assets/bg2.jpg'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.profiles-container {
		width: 100%;
		padding: 30px 10px 20px 20px;
	}
	.title{
		border-bottom: 1px #007700 solid;
		font-weight: 500;
		padding-left: 0.5em;
		color: #076678;
		line-height: 1.5em;
	}
	.portrait{
		height: 7rem;
		width: 7rem;
		object-fit: cover;
		border-radius: 5px;
		margin: 20px 0px 30px 20px;
		transition: 0.2s ease-in-out;
		box-shadow: #001528 0px 0px 5px 0px; 
	}
	.portrait:hover {
		transform: scale(1.1,1.1);
		box-shadow: #001528 0px 0px 10px 0px; 
	}
</style>
