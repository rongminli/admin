<template>
	<div class="user">
		<router-link to="/profiles"><img src="../assets/bg2.jpg" /></router-link>
		<div class="username">没穿鞋的刀客</div>
	</div>
</template>

<script></script>

<style scoped="scoped">
img {
	height: 7rem;
	width: 7rem;
	border-radius: 10px;
	object-fit: cover;
}
img:hover {
	border: 2px #d08770 solid;
}
.user {
	position: fixed;
	right: 50px;
	top: 30px;
	font-size: 1rem;
	z-index: 1000;
}
.username {
	font-weight: 600;
	text-align: center;
}
</style>
