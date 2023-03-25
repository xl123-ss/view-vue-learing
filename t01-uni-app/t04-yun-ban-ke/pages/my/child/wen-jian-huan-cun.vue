<template>
	<view>
		<!-- 自定义状态栏 -->
		<uni-status-bar></uni-status-bar>
		<!-- 标题 -->
		<title-page :back="true" word="文件缓存区"  :right="false">
			<template #right>
					<view  class="pr-1 text-dark" >管理</view>
			</template>
		</title-page>
		<!-- 
		 内容
		 -->
		 <view class="text-center container">
			 <view class="mt-5"></view>
			 <view class="f-center pr-1">
			 	<text class="iconfont-lg icon-right"></text>
			 </view>
			 <view>
				 <view>还没有暂存到云班课的文件！</view>
				 <view>  你可以将其他的App中的文件分享到云班课
				 并选择保存到文件暂存区'，就可以在这里看到了</view>
			 </view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
