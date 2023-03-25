<template>
	<view :style="{height:barHeight}" class="uni-status-bar">

	</view>
</template>
<script setup>
	import { ref } from 'vue';
	//获得状态栏的高度
	let statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
	const barHeight = ref(statusBarHeight);
</script>

<style scoped>
	.uni-status-bar{
		width: 750px;
		background-color: var(--light);
	}
</style>

<!-- 导航栏 -->

