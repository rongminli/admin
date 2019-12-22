<template>
	<div class="container">
		<div class="action" ref="action">
			<form class="login-form" action="../index.html">
				<h1>登 录</h1>
				<div class="txtb"><input type="text" name="" id="" placeholder="邮 箱" /></div>
				<div class="txtb"><input type="password" name="" id="" placeholder="密 码" /></div>
				<input type="submit" class="logbtn" value="确 定" />
				<div class="bottom-text">
					<div class="left"><a href="#" @click="toggle('findpwd')">忘记密码？</a></div>
					<div class="right">
						没有账号？
						<a href="#" @click="toggle('signup')">前往注册</a>
					</div>
				</div>
			</form>
			<form class="signup-form" action="../index.html">
				<h1>注 册</h1>
				<div class="txtb"><input type="text" name="" id="" placeholder="邮 箱" /></div>
				<div class="txtb"><input type="password" name="" id="" placeholder="密 码" /></div>
				<div class="txtb vCode">
					<input type="vCode" name="" id="" placeholder="验证码" />
					<button>发送</button>
				</div>
				<input type="submit" class="logbtn" value="确 定" />
				<div class="bottom-text">
					<div class="left">
						已有账号？
						<a href="#" @click="toggle()">前往登陆</a>
					</div>
				</div>
			</form>
			<form class="findpwd-form" action="../index.html">
				<h1>找回密码</h1>
				<div class="txtb"><input type="text" name="" id="" placeholder="邮 箱" /></div>
				<div class="txtb vCode">
					<input type="vCode" name="" id="" placeholder="验证码" />
					<button>发送</button>
				</div>
				<div class="txtb"><input type="password" name="" id="" placeholder="新密码" /></div>
				<input type="submit" class="logbtn" value="确 定" />
				<div class="bottom-text">
					<div class="right"><a href="#" @click="toggle()">前往登陆</a></div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
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
	background-color: rgb(240, 235, 210);
	color: rgb(100, 100, 80);
}

.action {
	width: 360px;
	height: 560px;
	position: absolute;
	top: 50%;
	left: 50%;
	transition: 0.5s ease-in-out;
	transform-style: preserve-3d;
	transform: perspective(60000px) translate(-50%, -50%);
}

.signup {
	transform: translate(-50%, -50%) rotate3d(0, 1, 0, -120deg);
}
.findpwd {
	transform: translate(-50%, -50%) rotate3d(0, 1, 0, 120deg);
}

.findpwd-form,
.login-form,
.signup-form {
	display: block;
	background: rgb(255, 250, 240);
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

.findpwd-form h1,
.login-form h1,
.signup-form h1 {
	text-align: center;
	margin-bottom: 60px;
}

.txtb {
	border-bottom: 2px solid #adadad;
	position: relative;
	margin: 30px 0;
}

.txtb input {
	font-size: 15px;
	color: #333;
	border: none;
	outline: none;
	background: none;
	padding: 0 5px;
	height: 40px;
	width: 100%;
	text-align: center;
	letter-spacing: 1px;
}

.vCode {
	position: relative;
}
.vCode button{
	border: none;
	border-radius: 5px;
	background-color: rgb(225, 220, 210);
	height: 2em;
	width: 4em;
	font-size: 15px;
	position: absolute;
	right: 0;
	bottom: 2px;
	color: rgb(100, 100, 80);
	font-weight: 600;
}
.vCode button:hover{
	background-color: rgb(205, 200, 190);
}

.logbtn {
	display: block;
	width: 100%;
	height: 50px;
	cursor: pointer;
	background-color: inherit;
	border: 2px rgba(115, 110, 100, 0.5) solid;
	border-radius: 10px;
	transition: 0.5s;
	font-size: 23px;
	font-weight: bold;
	margin-top: 69px;
	color: rgb(100, 100, 80);
}

.logbtn:hover {
	background-color: rgba(160, 150, 100, 0.5);
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
