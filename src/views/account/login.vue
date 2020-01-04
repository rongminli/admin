<template>
	<form class="form">
		<h1>登 录</h1>
		<div class="txtb"><input type="text" name="" id="email" placeholder="邮 箱" v-model="loginForm.email" /></div>
		<div class="txtb"><input type="password" name="" id="password" placeholder="密 码" v-model="loginForm.password" /></div>
		<input type="button" class="submitBtn" @click="login" value="确 定" />
	</form>
</template>

<script>
import userApi from '@/api/user.js';
export default {
	name: 'Login',
	data() {
		return {
			loginForm: {
				email: '1055310405@qq.com',
				password: '000000'
			}
		};
	},
	methods: {
		login() {
			userApi.login(this.loginForm).then(data => {
				localStorage.setItem('token', data.token);
				this.$router.push('/');
			});
		}
	}
};
</script>

<style>
	@import url("./form.css");
</style>
