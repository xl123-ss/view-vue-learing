<template>
	<view>


		<!-- 自定义状态栏 -->
		<uni-status-bar></uni-status-bar>
		<!-- 标题栏 -->
		<title-page :back="true" :word="course.courseName" :right="false">
			<view class="pr-1 ">课堂表现</view>
		</title-page>


		<!-- 选项卡 -->
		<view class="flex text-center bg-white border-bottom pt-2">
			<view class="flex-1" :class="curIndex2 == 0 ? select : ''" @click="changeCur(0)">
				全部
			</view>

			<view class="flex-1  " :class="curIndex2 == 1 ? select : ''" @click="changeCur(1)">
				进行中
			</view>

			<view class="flex-1  " :class="curIndex2 == 2 ? select : ''" @click="changeCur(2)">
				已结束
			</view>

		</view>
		<!-- 具体内容 -->
		<view>
			<view v-show="curIndex2 == 0">
				<uni-collapse ref="collapse" v-model="value" @change="change">
					<template v-for="(val,index) in kechengs">
						<uni-collapse-item :title="val.name">
							<uni-collapse ref="collapse" v-model="value" @change="change">
								<view v-for="(child,index) in val.childs" class="border">
									<ciew>
										<view class="flex ">
											<image :src="child.url" class="img"></image>
											<view class="flex-1  f-start">{{child.name}}</view>
										</view>


									</ciew>

									<view class="flex">
										<view>{{child.renshu}}人参与</view>
										<view class="text-info flex-1 text-center">{{child.jingyan}}经验</view>
										<view v-if="child.state == 0" class="text-info">
											<view class=""></view>进行中
										</view>
										<view v-else class="text-danger">
											已结束
										</view>
									</view>

								</view>
							</uni-collapse>
						</uni-collapse-item>
					</template>
				</uni-collapse>

			</view>
			<view v-show="curIndex2 == 1">

				<uni-collapse ref="collapse" v-model="value" @change="change">
					<template v-for="(val,index) in kechengs">
						<uni-collapse-item :title="val.name">
							<uni-collapse ref="collapse" v-model="value" @change="change">
								<view v-for="(child,index) in val.childs" class="border" v-show="child.state == 0">

									<view class="flex ">
										<image :src="child.url" class="img"></image>
										<view class="flex-1  f-start">{{child.name}}</view>
									</view>




									<view class="flex">
										<view>{{child.renshu}}人参与</view>
										<view class="text-info flex-1 text-center">{{child.jingyan}}经验</view>
										<view class="text-info">
											<view class=""></view>进行中
										</view>
									</view>

								</view>
							</uni-collapse>
						</uni-collapse-item>
					</template>
				</uni-collapse>


			</view>
			<view v-show="curIndex2 == 2">
				<uni-collapse ref="collapse" v-model="value" @change="change">
					<template v-for="(val,index) in kechengs">
						<uni-collapse-item :title="val.name">
							<uni-collapse ref="collapse" v-model="value" @change="change">
								<view v-for="(child,index) in val.childs" class="border" v-show="child.state == 1">


									<view class="flex ">
										<image :src="child.url" class="img"></image>
										<view class="flex-1  f-start">{{child.name}}</view>
									</view>


									<view class="flex">
										<view>{{child.renshu}}人参与</view>
										<view class="text-info flex-1 text-center">{{child.jingyan}}经验</view>
										<view class="text-danger">
											<view class=""></view>已结束
										</view>
									</view>

								</view>
							</uni-collapse>
						</uni-collapse-item>
					</template>
				</uni-collapse>
			</view>
		</view>

		<!-- 底部导航 -->
		<view>
			<tab-bar :curIndex="curIndex"></tab-bar>
		</view>
	</view>
</template>
<script>
	import tabBar from "../../../components/commons/tab-bar.vue"
	import tabBody from "../../../components/commons/tab-body.vue"
	import unicollapse from "../../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue"

	export default {
		components: {
			tabBar,
			tabBody,
			unicollapse
		},

		data() {
			return {
				curIndex: 2,
				curIndex2: 1,
				course: "",
				select: {
					"label": true,
					"text-info": true
				},
				value: ['0'],
				accordionVal: '1',
				content: '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。',
				extraIcon: {
					color: '#000',
					size: '26',
					type: 'image'
				},
				kechengs: [{
						name: "00.全课",
						count: 3,
						childs: [{
								name: "第四五周学习小结",
								url: "/static/logo.png",
								renshu: 23,
								jingyan: 10,
								state: 0, //0代表进行中，1代表结束
							},
							{
								name: "个人选型",
								url: "/static/logo.png",
								renshu: 23,
								jingyan: 10,
								state: 1
							},
							{
								name: "后端打卡区",
								url: "/static/logo.png",
								renshu: 23,
								jingyan: 10,
								state: 1
							},
						]
					},
					{
						name: "01.全课",
						count: 3,
						childs: [{
								name: "第四五周学习小结",
								url: "/static/logo.png",
								renshu: 23,
								jingyan: 10,
								state: 0
							},
							{
								name: "个人选型",
								url: "/static/logo.png",
								renshu: 23,
								jingyan: 10,
								state: 0
							},
							{
								name: "后端打卡区",
								url: "/static/logo.png",
								renshu: 23,
								jingyan: 10,
								state: 0
							},
						]
					}
				]
			}
		},

		methods: {
			changeCur(index) {
				this.curIndex2 = index;
			},
			add() {
				if (this.content.length > 35) {
					this.content = '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。'
				} else {
					this.content = '折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。'
				}
				// TODO 小程序中不支持自动更新 ，需要手动resize 更新组件高度
				// #ifdef MP
				this.$nextTick(() => {
					this.$refs.collapse.resize()
				})
				// #endif
			},
			onClick(e) {
				uni.showToast({
					title: '列表被点击'
				})
			},
			change(e) {
				console.log(e);
			}
		},
		onLoad: function(option) {
			if (option.course != null) {
				let course = JSON.parse(option.course)
				uni.setStorageSync('course', course)
				this.course = course;

			} else {
				const course = uni.getStorageSync('course')
				this.course = course;
			}
		}
	}
</script>
<style scoped>
	.label {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.label::after {
		content: '';
		width: 100rpx;
		height: 10rpx;
		background-color: var(--info);
	}

	.example-body {
		flex-direction: column;
		flex: 1;
	}

	.content {
		padding: 15px;
	}

	.text {
		font-size: 14px;
		color: #666;
		line-height: 20px;
	}

	.button {
		margin-top: 10px;
		margin: 10px;
		margin-bottom: 0;
	}

	.img {
		width: 60rpx;
		height: 60rpx;
	}
</style>
