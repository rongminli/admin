<template>
	<button ref="btn" @click="sendVCode" type="button" class="normal">
		<span>{{countDownStr}}<i class="el-icon-loading"></i></span>
	</button>
</template>

<script>
const state = {
	NORMAL: 'normal',
	SENDING: 'sending',
	WAIT: 'wait'
};
export default {
	name: 'SendVCodeBtn',
	data() {
		return {
			countDownStr: '发送',
			timer: '',
			state: state.NORMAL //同时作为类名用来管理不动状态下的样式
		};
	},
	watch:{
		state(val){
			this.$refs.btn.classList = val
		}
	},
	methods: {
		sendVCode() {
			if (this.state != 'normal') return;
			this.state = state.SENDING;
			this.countDownStr = '发送中 '
			setTimeout(() => {
				this.state = state.WAIT;
				this.countDown();
			}, 2000);
		},
		countDown() {
			const _this = this;
			_this.countDownStr = '重新发送 (60)';
			let count = 3;
			_this.timer = setInterval(function() {
				count--;
				if (count == 0) {
					clearInterval(_this.timer);
					_this.countDownStr = '发送';
					_this.state = state.NORMAL;
					return;
				}
				_this.countDownStr = '重新发送 (' + count + ')';
			}, 1000);
		}
	}
};
</script>

<style scoped>
button {
	border: none;
	border-radius: 10px;
	background-color: rgb(225, 220, 210);
	height: 2em;
	font-size: 15px;
	position: absolute;
	color: rgb(130, 130, 110);
	font-weight: 600;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	transition: 0.5s;
	overflow: hidden;
	width: 4em;
	white-space: nowrap;
	display: inline-block;
}
button:hover {
	background-color: rgb(205, 200, 190);
}
button:focus {
	outline: 0;
}
button span {
	font-size: 5px;
	/* color: rgba(240, 100, 100, 1); */
}
button i {
	visibility:  hidden;
}

.normal span,
.wait span
{
	display: inline-block;
	position: position;
	transform: translateX(0.5em);
}
.sending {
	cursor: wait;
	width: 5em;
}
.sending span i {
	visibility: visible;
}

.wait {
	cursor: not-allowed;
	opacity: 0.5;
	width: 6.5em;
}


</style>
