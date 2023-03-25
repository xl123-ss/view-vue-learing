<template>
	<view>
		<!-- 自定义状态栏 -->
		<uni-status-bar></uni-status-bar>
		<!-- 标题 -->
		<title-page :back="true" word="缓存管理" :right="false">
			<view class="pr-1 text-dark">清理选中</view>
		</title-page>
		<!-- 
		 下面的内容
		 -->
		<view>
			<view class="mb-2">
				班课资源
			</view>

			<view class="mb-2">
				<view class="flex border mb-2 bg-white" v-for="(value,index) in courses" :key="value.courseId">
					<view class="border">
						<image :src="value.courseCover" class="thumbnail2"></image>
					</view>

					<view class="flex flex-column">
						<view class="flex">
							<view>{{value.courseClass}}</view>
							<view class="pl-2">{{value.courseName}}</view>
						</view>

						<view class="text-dark">
							{{value.size}}
						</view>
					</view>
				</view>

			</view>
			
			<view class="mb-2">
				班课资源
			</view>
			<view class="mb-2">
				<view class="flex border mb-2 bg-white">
					<view class="border">
						<image src="/static/images/vue.jpg" class="thumbnail2"></image>
					</view>
				
					<view class="flex flex-column">
						<view>
							课程圈缓存
						</view>
				
						<view class="text-dark">
							{{courseCircle.size}}
						</view>
					</view>
				</view>
				
			</view>

			<view class="border bg-white p-1 text-center text-danger mt-3">清除全部缓存</view>
		</view>





	</view>
</template>

<script>
	export default {

		data() {
			return {
				courses: [{
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
						flag: false
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
						size: "12kb",
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
						size: "13kb",
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
						size: "14kb",
					},
				],
				
				courseCircle:{
					size:"12kb"
				}
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
