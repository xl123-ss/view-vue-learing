<template>
	<view>
		<!-- 自定义状态栏 -->
		<uni-status-bar></uni-status-bar>
		<!-- 标题 -->
		<title-page :back="true" word="关于云班课" :right="false">

		</title-page>

		<view class="flex f-center mb-3">
			<view class="flex flex-column text-center">
				<view style="margin-top: 150rpx;"></view>
				<image src="../../../../static/yun-ban-ke.png" class="thumbnail2">
				</image>
				<view class="mt-2">云班课</view>
				<view class="mt-2 font-small">Ver 5.4.19</view>
			</view>
		</view>

		<view class="flex bg-white p-1">
			<xuan-xiang-ka :values="values" class="">	
			</xuan-xiang-ka>
		</view>
		



	</view>
</template>

<script>
	export default {

		data() {
			return {
				values:{
					name:"更新日志"
				}
			}
		}

	}
</script>

<style>
	.thumbnail {
		width: 110rpx;
		height: 110rpx;
		border-radius: var(--radius);
	}

	.thumbnail2 {
		width: 160rpx;
		height: 160rpx;
		border-radius: var(--radius);
		/* border-radius: var(--radius); */
	}
</style>
