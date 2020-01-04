<template>
	<form class="form" >
		<h1>找回密码</h1>
		<div class="txtb"><input type="email" name="" id="" placeholder="邮 箱" /></div>
		<div class="txtb vCode">
			<input type="text" name="" id="" placeholder="验证码" />
			<SendVCodeBtn />
		</div>
		<div class="txtb"><input type="password" name="" id="" placeholder="新密码" /></div>
		<input type="button" class="submitBtn" value="确 定" />
		
	</form>
</template>

<script>
	import SendVCodeBtn from '@/components/formEl/SendVCodeBtn.vue';
	export default {
		name: 'Findpwd',
		components:{ SendVCodeBtn }
	}
</script>

<style scoped>
	@import url("./form.css");
</style>
