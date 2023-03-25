<template>
	<!-- 自定义状态栏 -->
	<uni-status-bar></uni-status-bar>
	<title-page word="发现"></title-page>
	
	<view class="mt-3">
		<template  v-for="(value,index) in values" :key="value.name">
			<view class="flex bg-white border p-1">
				<xuan-xiang-ka :values="value">
					<template #img>
						<image :src="value.img" class="thumbnail"></image>
					</template>
				</xuan-xiang-ka>
			</view>
			<view v-if="index == 1" style="margin-top: 80rpx;"></view>
		</template>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				values:[
					{
						name:"课程圈",
						url:'',
						img:'/static/images/springboot.jpg'
					},
					{
						name:"公开课",
						url:'',
						img:'/static/images/springboot.jpg'
					},
					
					{
						name:"云教材",
						url:'',
						img:'/static/images/springboot.jpg'
					},
					
					{
						name:"书香中国",
						url:'',
						img:'/static/images/springboot.jpg'
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.thumbnail {
		width: 40rpx;
		height: 40rpx;
		border-radius: var(--radius);
	}
</style>
