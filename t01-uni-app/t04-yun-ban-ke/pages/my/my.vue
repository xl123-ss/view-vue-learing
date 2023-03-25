<template>
	<view>
		<!-- aaaa -->
		<!-- 自定义状态栏 -->
		<uni-status-bar></uni-status-bar>
		<!-- 标题 -->
	<!-- 	<view class="flex pb-1 bg-light">
			<view class="flex-1 text-center">我的</view>
			<view class="pr-1 ">帮助</view>
		</view> -->
		<title-page>
		<!-- 	<template #left>
				<view class="f-center pr-1" >
					<text class="iconfont icon-right"></text>
				</view> -->
			<!-- </template> -->
		</title-page>
		<!-- 头像 -->
		<view class="flex mb-2 bg-light">
			<view class="ml-1">
				<image :src="person.avatar" class="thumbnail"></image>
			</view>
			<view class="f-center pl-1">
				{{person.name}}
			</view>
			<view class="flex-1"></view>
			<view class="f-center pr-1">
				<text class="iconfont icon-right"></text>
			</view>
		</view>
		<!--一些信息显示-->
		<view class="flex mb-2 bg-light">
			<view v-for="(value,index) in person.show" class="border flex-1 text-center">
				<view class="text-info">{{value.score}}</view>
				<view class="mt-1">{{value.name}}</view>
			</view>
		</view>

		<!-- functions -->
		<view class="flex mb-2 bg-light">
			<view v-for="(value,index) in person.functions" class=" flex-1 text-center">
				<image :src="value.url" class="thumbnail2 rounded-circle"></image>
				<view class="font-sm text-muted mt-1">{{value.name}}</view>
			</view>
		</view>
		<!-- 样式测试 -->
		<!-- 		<view>
			<span class="iconfont icon-liwu"></span>
			<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-liwu"></use>
			</svg>
		</view> -->

		<!--我的勋章 -->
		<view class="mb-2 bg-light">
			<view class="flex mb-2">
				<view>我的勋章</view>
				<view class="flex-1 text-right">查看所有勋章</view>
				<view class="f-center pr-1">
					<text class="iconfont-lg icon-right"></text>
				</view>
			</view>
			<view class="flex">
				<view v-for="(value,index) in person.xunzhangs" class=" flex-1 text-center">
					
					<image :src="value.url" class="thumbnail2 rounded-circle " ></image>
					<view class="font-sm text-muted mt-1">{{value.name}}</view>
					
				</view>
			</view>
		</view>
		<!-- 下面的选项卡 -->
		<view class="mb-2 bg-light">
			<view class="border flex p-1"  v-for="(value,index) in person.options">
					<xuan-xiang-ka :values="value">
						<template v-if="index == 1"  #content>
							<view >累积分享{{value.count}}次</view>
						</template>
					</xuan-xiang-ka>
			</view>
		</view>
	</view>
</template>

<script>
	// import foo from ""
	
	let baseUrl = '/static/images/my/';

	
	export default {
		data() {

			return {
				
				person: {
					name: '薛龙',
					avatar: '/static/images/xl.jpg',
					show: [{
						name: '经验值',
						score: 2386,
					}, {
						name: '魅力',
						score: 0,
					}, {
						name: '蓝豆',
						score: 0,
					}, {
						name: '心意',
						score: 0,
					}],
					functions: [{
							name: '我的空间',
							url: baseUrl + 'kongjian.png',
						},
						{
							name: '我的收藏',
							url: baseUrl + 'shoucang.png',
						},
						{
							name: '心意卡片',
							url: baseUrl + 'liwu.png',
						},
						{
							name: '任务中心',
							url: baseUrl + 'renwu.png',
						},
						{
							name: '系统消息',
							url: baseUrl + 'xiaoxi.png',
						},
					],
					xunzhangs:[{
						name: '脑洞大开',
						url: baseUrl + 'naodong.png',
					}, {
						name: '学以致用',
						url: baseUrl + 'xuexi.png',
					}, {
						name: '一马当先',
						url: baseUrl + 'chonglang.png',
					}, {
						name: '十八般武艺',
						url: baseUrl + 'wuyi.png',
					}, ],
					options:[
						{
							name:'文件暂存区',
							url:'/pages/my/child/wen-jian-huan-cun'
						},
				
						{
							name:'分享给朋友',
							url:'',
							count:0
						},
						{
							name:'用户协议',
							url:'/pages/my/child/yong-hu-xie-yi',
						},
						{
							name:'隐私政策',
							url:'',
						},
						{
							name:'设置',
							url:'/pages/my/child/she-zhi',
						}],
				},
			}
		},
		methods: {
			
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
		padding: 10px;
		width: 70rpx;
		height: 70rpx;
		background-color: aliceblue;
		/* border-radius: var(--radius); */
	}
</style>
