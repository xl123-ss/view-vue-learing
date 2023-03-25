<template>
	<view class="tarbar">
		<view v-for='(item,index) in datas' @click="tabClick(index,item.urls,item.id)">

			<image :src="(curIndex == index) ? item.selectedIcon:item.icon" class="thumbnail"></image>
			<view v-text="item.name"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tab-bar",
		props: {
			curIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
			
				datas: [{
						urls: '/pages/index/child/zi-yuan',
						icon: '/static/tabbar/my.png',
						selectedIcon: '/static/tabbar/my-select.png',
						name: '资源',
						id: 1,
					},
					{
						urls: '/pages/index/child/zi-yuan',
						icon: '/static/tabbar/my.png',
						selectedIcon: '/static/tabbar/my-select.png',
						name: '成员',
						id: 2,
					},
					{
						urls: '/pages/index/child/ke-cheng',
						icon: '/static/tabbar/my.png',
						selectedIcon: '/static/tabbar/my-select.png',
						name: '活动',
						id: 3,
					},
					{
						urls: '/pages/tcpj/orderSucceed',
						icon: '/static/tabbar/my.png',
						selectedIcon: '/static/tabbar/my-select.png',
						name: '消息',
						id: 4,
					},
					{
						urls: '/pages/tcpj/orderSucceed',
						icon: '/static/tabbar/my.png',
						selectedIcon: '/static/tabbar/my-select.png',
						name: '详情',
						id: 5,
					},
				],
			}
		},
		methods: {
			tabClick(i, urls, id) {
				// console.log(urls)
				// this.curIndex = i
				// console.log(this.curIndex)
				uni.reLaunch({
					url: urls
				});
			},
		}
	}
</script>

<style scoped>
	.tarbar {
		width: 100%;
		height: 96rpx;
		display: flex;
		justify-content: space-around;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		z-index: 100;
		font-size: 30rpx;
		color: #999999;
	}

	.tarbar view {
		text-align: center;
	}

	.thumbnail {
		width: 50rpx;
		height: 50rpx;
		border-radius: var(--radius);
	}
</style>
