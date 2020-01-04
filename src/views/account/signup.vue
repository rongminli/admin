<template>
	<form class="form" >
		<h1>注 册</h1>
		<div class="txtb"><input type="text" name="" id="email" placeholder="邮 箱" /></div>
		<div class="txtb"><input type="password" name="" id="password" placeholder="密 码" /></div>
		<div class="txtb vCode">
			<input type="text" name="" id="vCode" placeholder="验证码" />
			<SendVCodeBtn />
		</div>
		<input type="button" class="submitBtn" value="确 定" />
	</form>
</template>

<script>
	import SendVCodeBtn from '@/components/formEl/SendVCodeBtn.vue';
	export default {
		name: 'Signup',
		components:{ SendVCodeBtn }
	}
</script>

<style>
	@import url("./form.css");
</style>
