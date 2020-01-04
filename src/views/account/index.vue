<template>
	<div class="container">
		<div class="wraper">
			<div class="action" ref="action">
				<!--  -->
				<div class="login-form">
					<Login/>
					<div class="bottom-text">
						<div class="left">
							<a href="#" @click="toggle('findpwd')">
								<i class="el-icon-d-arrow-left"></i>
								忘记密码？
							</a>
						</div>
						<div class="right">
							没有账号？
							<a href="#" @click="toggle('signup')">
								前往注册
								<i class="el-icon-d-arrow-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="signup-form">
					<Signup/>
					<div class="bottom-text">
						<div class="left">
							已有账号？
							<a href="#" @click="toggle()">
								<i class="el-icon-d-arrow-left"></i>
								前往登陆
							</a>
						</div>
					</div>
				</div>
				<div class="findpwd-form" >
					<Findpwd/>
					<div class="bottom-text">
						<div class="right">
							<a href="#" @click="toggle()">
								前往登陆
								<i class="el-icon-d-arrow-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Login from './login.vue'
import Signup from './signup.vue'
import Findpwd from './findpwd.vue'
import SendVCodeBtn from '@/components/formEl/SendVCodeBtn.vue';

const state = {
	NORMAL: 'normal',
	SENDING: 'sending',
	INVALID: 'invalid'
};
export default {
	name: 'Account',
	components: { SendVCodeBtn,Login,Signup,Findpwd },
	data() {
		return {
			countDownStr: '',
			state: state.NORMAL,
			loginForm: {
				email:'1055310405@qq.com',
				password: '000000'
			}
		};
	},
	methods: {
		toggle(className) {
			const actionEl = this.$refs.action;
			if (className === 'signup') {
				actionEl.classList = 'signup action';
			} else if (className === 'findpwd') {
				actionEl.classList = 'findpwd action';
			} else {
				actionEl.classList = 'action';
			}
		}
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	text-decoration: none;
	font-family: montareeat;
}

.container {
	min-height: 100vh;
	background-color: rgba(240, 235, 210,1);
	color: rgb(100, 100, 80);
}
.wraper {
	width: 360px;
	height: 560px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* opacity: 0.8; */
}
.action {
	width: 100%;
	height: 100%;
	transition: 0.5s ease-in-out;
	transform-style: preserve-3d;
	transform: perspective(60000px) ;
}

.signup {
	transform:  rotate3d(0, 1, 0, 240deg);
}
.findpwd {
	transform:  rotate3d(0, 1, 0, 120deg);
}

.findpwd-form,
.login-form,
.signup-form {
	display: block;
	background: rgba(255, 250, 240);
	padding: 50px 40px;
	border-radius: 10px;

	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.login-form {
	transform: translateZ(120px);
}
.signup-form {
	transform: rotateY(120deg) translateZ(120px);
}
.findpwd-form {
	transform: rotateY(-120deg) translateZ(120px);
}

.bottom-text .left {
	text-align: center;
	font-size: 13px;
	position: absolute;
	bottom: 20px;
	left: 40px;
}

.bottom-text .right {
	text-align: center;
	font-size: 13px;
	position: absolute;
	bottom: 20px;
	right: 40px;
}

.bottom-text a {
	color: rgb(100, 200, 80);
}
.bottom-text a:hover {
	text-decoration: underline;
}
</style>
