<template>
	<div class="wrap">
		<div class="box">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<h1>这是什么呀?</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: 'regular-hexahedron'
};
</script>

<style scoped>
.wrap {
	transform-style: preserve-3d;
	transform: perspective(1000px);
	position: relative;
	padding-top: 100px;
	padding-bottom: 100px;
}

.box {
	width: 300px;
	height: 300px;
	margin: 0px auto 0;
	transform-style: preserve-3d;
	text-align: center;
	transition: 3s ease-in-out;
	border-radius: 5px;
	position: relative;
	background-color: rgba(255, 250, 240,0.5);;
	border: 1px rosybrown solid;
}
.box h1{
	font-size: 25px;
	line-height: 300px;
}

.box:hover {
	transform: rotateY(180deg);
}
.box > div {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transform-origin: 50% 50% 50%;
	text-align: center;
	line-height: 300px;
	border-radius: 20px;
	border: 2px rosybrown solid;
	background-color: rgba(240, 235, 210,0.1);
}

.box > div:nth-child(1) {
	transform: rotateY(0deg) translateZ(150px);
}

.box > div:nth-child(2) {
	transform: rotateY(90deg) translateZ(150px);
}

.box > div:nth-child(3) {
	transform: rotateY(180deg) translateZ(150px);
}

.box > div:nth-child(4) {
	transform: rotateY(270deg) translateZ(150px);
}

.box > div:nth-child(5) {
	transform: rotateX(-90deg) translateZ(150px);
	border: none;
}

.box > div:nth-child(6) {
	transform: rotateX(90deg) translateZ(150px);
	border: none;
}
</style>
