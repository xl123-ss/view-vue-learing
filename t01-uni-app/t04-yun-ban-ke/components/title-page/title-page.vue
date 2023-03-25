<template>
	<view class="flex pb-1 bg-white">
		<!-- 左侧的图标 -->
		<view v-show="back" class="f-center pr-1" @click="goback">
			<text class="iconfont icon-zuo"></text>
		</view>
		<view v-show="close" class="f-center pr-1" @click="goback">
			<text>关闭</text>
		</view>
		<!-- 中间的文字 -->
		<view class="flex-1 text-center">{{word}}</view>
		<!-- 右面显示的内容 -->
		<view v-if="right" class="pr-1 ">{{rightV}}</view>
		<slot v-else></slot>
	</view>
</template>

<script>
	export default {
		name: "title-page",
		props: {
			back: {
				type: Boolean,
				default: false
			},
			close: {
				type: Boolean,
				default: false
			},

			word: {
				type: String,
				default: "我的"
			},
			right: {
				type: Boolean,
				default: true
			},
			rightV: {
				type: String,
				default: "帮助"
			}
		},
		data() {
			return {

			}
		},
		methods: {
			goback() {
				uni.navigateBack({
					delta: 1 //返回上上上个页面
				});
			}
		}
	}
</script>

<style>

</style>
