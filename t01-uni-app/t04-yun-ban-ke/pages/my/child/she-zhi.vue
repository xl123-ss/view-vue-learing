<template>
	<view>
		<!-- 自定义状态栏 -->
		<uni-status-bar></uni-status-bar>
		<!-- 标题 -->
		<title-page :back="true" word="设置" :right="false">
		</title-page>
		<!-- 
		 选项卡
		 -->
		<view class="mb-2 ">
			<template v-for="(value,index) in options">
				<view v-if="index == 0" class="mt-3 mb-3  flex p-1 border bg-white">
					<xuan-xiang-ka :values="value">

					</xuan-xiang-ka>
				</view>
				
				<view v-else-if="index == 1" class="flex p-1 border bg-white">
					<xuan-xiang-ka :values="value" :right="false">
						<view  class="f-center pr-0">
							<checkbox  :checked="isChecked" @click="isChecked=!isChecked"></checkbox>
						</view>
					</xuan-xiang-ka>
				</view>

				<view v-else class="border flex p-1 bg-white">
					<xuan-xiang-ka :values="value">

					</xuan-xiang-ka>
				</view>
			</template>
		</view>


		<view class="border bg-white p-1 text-center text-danger">退出账号</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				options: [{
						name: '缓存管理',
						url: '/pages/my/child/she-zhi-child/huan-cun-guan-li'
					},

					{
						name: '隐藏已结束班课',
						url: '',
						count: 0
					},
					{
						name: '账号安全',
						url: '/pages/my/child/yong-hu-xie-yi',
					},
					{
						name: '检查更新',
						url: '',
					},
					{
						name: '反馈、投诉与建议',
						url: '/pages/my/child/she-zhi',
					},
					{
						name: '隐私设置',
						url: '/pages/my/child/she-zhi',
					},
					{
						name: '关于我们',
						url: '/pages/my/child/she-zhi-child/guan-yu-wo-men',
					},
					{
						name: '注销账号',
						url: '/pages/my/child/she-zhi',
					},
				],
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
