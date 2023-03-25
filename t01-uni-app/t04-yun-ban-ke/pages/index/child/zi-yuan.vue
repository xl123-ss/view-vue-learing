<template>
	<!-- 自定义状态栏 -->
	<uni-status-bar></uni-status-bar>
	<!-- 标题栏 -->
	<title-page :back="true" :word="course.courseName" :right="false">
		<view class="pr-1 icon iconfont icon-sousuo "></view>
	</title-page>
	
	<view>
		资源。。。。。。。
	</view>


	<!-- 底部导航 -->
	<view>
		<tab-bar :curIndex="curIndex"></tab-bar>
	</view>

</template>
<script>
	import tabBar from "../../../components/commons/tab-bar.vue"
	export default {
		data() {
			return {
				curIndex: 0
			}
		},

		onLoad: function(option) {
			const course = uni.getStorageSync('course')
			this.course = course;
		},
		components: {
			tabBar
		}
	}
</script>
<style scoped>



</style>
