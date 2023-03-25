<template>
	<!-- 图片 -->
		<slot name="img"></slot>
		<!-- 名字 -->
		<view class="flex-1">
			<view @click="turn(values.url)">{{values.name}}</view>
		  
		</view>
		<!-- 中间的内容 -->
		<slot name="content" ></slot>
		<!-- 右面的> -->
		<view v-if="right" class="f-center pr-0 pl-1">
			<text class="iconfont-lg icon-right"></text>
		</view>
		<slot v-else ></slot>
	
</template>

<script>
	export default {
		name:"xuan-xiang-ka",
		props:{
			values:{
				
			},
			right:{
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			turn(e){
				console.log(e)
				uni.navigateTo({
				    url: e   
				})
			},
		}
	}
</script>

<style>

</style>