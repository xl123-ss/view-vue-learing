<template>
	<view>
		<!-- 自定义状态栏 -->
		<uni-status-bar></uni-status-bar>

		<!-- 条件编译-导航栏 -->
		//#ifdef APP-PLUS
		<view class="f-between pb-1 bg-light" id="nav-bar" :style="{width:screenWidth+'px',height:navBarHeight+'px'}">
			<view>

				<text class=" font-weight-bold ml-1 " :class="curIndex == 0 ? select : ''"
					@click="changeCur(0)">我创建的</text>
				<text class=" font-weight-bold ml-1 " :class="curIndex == 1 ? select : ''"
					@click="changeCur(1)">我加入的</text>

			</view>

			<view class="text-info">
				<text class="iconfont-lg icon-jia"></text>
				<text class="iconfont-lg icon-saoma mx-2"></text>
			</view>

		</view>
		//#endif




		<!-- 		<view class="f-start pb-2 bg-light" id="nav-bar"
			:style="{width:(screenWidth-buttonWidth)+'px' ,height:navBarHeight+'px'}">
			<view>
				<text class="text-info font-weight-bold ml-1 label" @click="changeCur(0)">我创建的</text>
				<text class="text-dark font-weight-bold mx-2" @click="changeCur(1)">我加入的</text>
			
			</view>
			<view class="text-info">
				<text class="iconfont-lg icon-more"></text>
			</view>
		</view> -->
		<view v-show="curIndex == 0">
			<view class="f-center mt-5 flex-column">
				<image src="/static/images//yun/xiao-shi.png" class="thumbnail2"></image>
				<view class="mt-4 font-small">还没有创建的班课</view>
			</view>
		</view>
		<!--我加入的-->
		<view v-show="curIndex == 1">
			<!--搜索框 -->
			<view class="flex mt-1 px-2">
				<view class="position-relative border flex-5 ">
					<view class="search-icon text-light-muted border f-center">
						<text class="iconfont icon-sousuo"></text>
					</view>
					<input type="text" placeholder="搜索" class="search-box  font-md pl-1" />
				</view>

				<text class=" flex-1 text-info font-weight-bold f-center"> 调序</text>

			</view>



			<!-- 主题内容 -->
			<view v-for="(course,index) in course" :key="(course.courseId)" :index="index"
				class="border-bottom bg-white mb-2" @click="turn(course)">
				<view class="text-dark h4 font-weight-bold p-2">
					{{course.courseName}}
				</view>
				<view class="flex px-2 ">
					<view class="flex-1">
						<image :src="course.courseCover" class="thumbnail"></image>
					</view>

					<view class="flex-4 ml-4">
						<view>
							<text>{{course.courseClass}}</text>
						</view>
						<view class="mt-1">
							<text class="text-muted mr-2">{{course.semester}}</text>
							<text class="text-info">{{course.courseNo}}</text>
						</view>
					</view>

					<view class="flex-1 text-right">
						<text class="iconfont icon-right text-muted"></text>
					</view>

				</view>
				<view class="p-2 f-around">
					<view>
						<view class="iconfont icon-select"></view>
						<view class="font-sm text-muted mt-1">签到</view>
					</view>
					<view>
						<view class="iconfont icon-people"></view>
						<view class="font-sm text-muted mt-1">课堂</view>
					</view>
					<view>
						<view class="iconfont icon-jiaoxuekejian"></view>
						<view class="font-sm text-muted mt-1">课件</view>
					</view>
					<view>
						<view class="iconfont icon-liwuhuodong"></view>
						<view class="font-sm text-muted mt-1">活动</view>
					</view>
					<view>
						<view class="iconfont icon-yuyin text-info"></view>
						<view class="font-sm text-muted mt-1">语音</view>
					</view>
				</view>
			</view>
		</view>





	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		onLoad,
		onReady
	} from "@dcloudio/uni-app";
	const url = ref("/pages/index/child/ke-cheng");
	const course = reactive([{
			courseId: 1,
			courseClass: '软件2242 Web2班',
			courseName: '后端工程开发',
			courseNo: '2942577',
			courseCover: '/static/images/springboot.jpg',
			courseTeacher: {
				name: '许莫淇',
				avatar: '/static/images/me.jpg'
			},
			semester: '2022-2023-2',
			finished: false,
			flag: false,
			
		},
		{
			courseId: 2,
			courseClass: '软件2242 Web2班',
			courseName: '前端工程开发',
			courseNo: '9488275',
			courseCover: '/static/images/vue.jpg',
			courseTeacher: {
				name: '许莫淇',
				avatar: '/static/images/me.jpg'
			},
			semester: '2022-2023-2',
			finished: false,
			flag: false,
			url: '/pages/index/child/ke-cheng'
		},
		{
			courseId: 3,
			courseClass: '软件2242 Web2班',
			courseName: 'Web 应用开发',
			courseNo: '8175074',
			courseCover: '/static/images/web.jpg',
			courseTeacher: {
				name: '许莫淇',
				avatar: '/static/images/me.jpg'
			},
			semester: '2022-2023-2',
			finished: true,
			url: '/pages/index/child/ke-cheng'
		},
		{
			courseId: 4,
			courseClass: '软件2242 Web2班',
			courseName: 'Java程序设计',
			courseNo: '2942533',
			courseCover: '/static/images/java.jpg',
			courseTeacher: {
				name: '许莫淇',
				avatar: '/static/images/me.jpg'
			},
			semester: '2022-2022-2',
			finished: true,
			url: '/pages/index/child/ke-cheng'
		},
	])

	let navBarHeight = ref(Number) //导航栏高度
	let screenWidth = ref(Number) //设备屏幕宽度
	let buttonWidth = ref(Number) //小程序胶囊宽度
	let curIndex = ref(1) //小程序胶囊宽度
	const select = reactive({
		'label': true,
		'text-info': true
	})
	const changeCur = (index) => {
		console.log(index)
		curIndex.value = index;
	}
	//#ifdef APP-PLUS
	onReady(() => {
		console.log('App 页面初始化')
		screenWidth = uni.getSystemInfoSync().screenWidth
		console.log('屏幕宽度' + screenWidth)
		let info = uni.createSelectorQuery().select('#nav-bar')
		info
			.boundingClientRect((data) => {
				console.log("导航高度" + data.height)
				navBarHeight = data.height
			}).exec()
	})
	//#endif
	const turn = (v) => {
		console.log(v)
		uni.navigateTo({
			url: "/pages/index/child/ke-cheng?course="+JSON.stringify(v)
		})
	};

	//#ifdef MP-WEIXIN
	onLoad(() => {
		console.log('小程序页面初始化')
		screenWidth = wx.getSystemInfoSync().screenWidth
		console.log('屏幕宽度' + screenWidth)
		buttonWidth = wx.getMenuButtonBoundingClientRect().width
		console.log("胶囊宽度" + buttonWidth)
		let info = uni.createSelectorQuery().select('#nav-bar')
		info
			.boundingClientRect((data) => {
				console.log("导航高度" + data.height)
				navBarHeight = data.height + 40
			}).exec()
	})
	//#endif







	// export default {
	// 	data() {
	// 		return {

	// 		}
	// 	},
	// 	methods: {

	// 	}
	// }
</script>

<style>
	.label {
		position: relative;
	}

	.label::after {
		content: '';

		position: absolute;
		top: 55rpx;
		left: 40rpx;
		width: 50rpx;
		height: 10rpx;
		/* width: 100%; */
		background-color: var(--info);
	}

	.search-icon {
		width: 70rpx;
		height: 70rpx;
		position: absolute;
		top: 0;
		left: 0;
	}

	.search-box {
		height: 70rpx;
		padding-left: 70rpx;
		background-color: var(--bgColor);
		border-radius: var(--radius);

	}

	.thumbnail {
		width: 110rpx;
		height: 110rpx;
		border-radius: var(--radius);
	}

	.thumbnail2 {
		width: 200rpx;
		height: 200rpx;
		border-radius: var(--radius);
	}
</style>
