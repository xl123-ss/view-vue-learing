if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_READY = "onReady";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$i = {
    __name: "uni-status-bar",
    setup(__props) {
      let statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
      const barHeight = vue.ref(statusBarHeight);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            style: vue.normalizeStyle({ height: barHeight.value }),
            class: "uni-status-bar"
          },
          null,
          4
          /* STYLE */
        );
      };
    }
  };
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-2ac0d4a5"], ["__file", "D:/work/view/code/front/view-study/mosoteach/components/uni-status-bar/uni-status-bar.vue"]]);
  const _sfc_main$h = {
    __name: "index",
    setup(__props) {
      vue.ref("/pages/index/child/ke-cheng");
      const course = vue.reactive([
        {
          courseId: 1,
          courseClass: "软件2242 Web2班",
          courseName: "后端工程开发",
          courseNo: "2942577",
          courseCover: "/static/images/springboot.jpg",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/me.jpg"
          },
          semester: "2022-2023-2",
          finished: false,
          flag: false
        },
        {
          courseId: 2,
          courseClass: "软件2242 Web2班",
          courseName: "前端工程开发",
          courseNo: "9488275",
          courseCover: "/static/images/vue.jpg",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/me.jpg"
          },
          semester: "2022-2023-2",
          finished: false,
          flag: false,
          url: "/pages/index/child/ke-cheng"
        },
        {
          courseId: 3,
          courseClass: "软件2242 Web2班",
          courseName: "Web 应用开发",
          courseNo: "8175074",
          courseCover: "/static/images/web.jpg",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/me.jpg"
          },
          semester: "2022-2023-2",
          finished: true,
          url: "/pages/index/child/ke-cheng"
        },
        {
          courseId: 4,
          courseClass: "软件2242 Web2班",
          courseName: "Java程序设计",
          courseNo: "2942533",
          courseCover: "/static/images/java.jpg",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/me.jpg"
          },
          semester: "2022-2022-2",
          finished: true,
          url: "/pages/index/child/ke-cheng"
        }
      ]);
      let navBarHeight = vue.ref(Number);
      let screenWidth = vue.ref(Number);
      vue.ref(Number);
      let curIndex = vue.ref(1);
      const select = vue.reactive({
        "label": true,
        "text-info": true
      });
      const changeCur = (index) => {
        formatAppLog("log", "at pages/index/index.vue:200", index);
        curIndex.value = index;
      };
      onReady(() => {
        formatAppLog("log", "at pages/index/index.vue:205", "App 页面初始化");
        screenWidth = uni.getSystemInfoSync().screenWidth;
        formatAppLog("log", "at pages/index/index.vue:207", "屏幕宽度" + screenWidth);
        let info = uni.createSelectorQuery().select("#nav-bar");
        info.boundingClientRect((data) => {
          formatAppLog("log", "at pages/index/index.vue:211", "导航高度" + data.height);
          navBarHeight = data.height;
        }).exec();
      });
      const turn = (v) => {
        formatAppLog("log", "at pages/index/index.vue:217", v);
        uni.navigateTo({
          url: "/pages/index/child/ke-cheng?course=" + JSON.stringify(v)
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createCommentVNode(" 自定义状态栏 "),
          vue.createVNode(_component_uni_status_bar),
          vue.createCommentVNode(" 条件编译-导航栏 "),
          vue.createElementVNode(
            "view",
            {
              class: "f-between pb-1 bg-light",
              id: "nav-bar",
              style: vue.normalizeStyle({ width: vue.unref(screenWidth) + "px", height: vue.unref(navBarHeight) + "px" })
            },
            [
              vue.createElementVNode("view", null, [
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["font-weight-bold ml-1", vue.unref(curIndex) == 0 ? select : ""]),
                    onClick: _cache[0] || (_cache[0] = ($event) => changeCur(0))
                  },
                  "我创建的",
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["font-weight-bold ml-1", vue.unref(curIndex) == 1 ? select : ""]),
                    onClick: _cache[1] || (_cache[1] = ($event) => changeCur(1))
                  },
                  "我加入的",
                  2
                  /* CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "text-info" }, [
                vue.createElementVNode("text", { class: "iconfont-lg icon-jia" }),
                vue.createElementVNode("text", { class: "iconfont-lg icon-saoma mx-2" })
              ])
            ],
            4
            /* STYLE */
          ),
          vue.createCommentVNode(` 		<view class="f-start pb-2 bg-light" id="nav-bar"\r
			:style="{width:(screenWidth-buttonWidth)+'px' ,height:navBarHeight+'px'}">\r
			<view>\r
				<text class="text-info font-weight-bold ml-1 label" @click="changeCur(0)">我创建的</text>\r
				<text class="text-dark font-weight-bold mx-2" @click="changeCur(1)">我加入的</text>\r
			\r
			</view>\r
			<view class="text-info">\r
				<text class="iconfont-lg icon-more"></text>\r
			</view>\r
		</view> `),
          vue.withDirectives(vue.createElementVNode(
            "view",
            null,
            [
              vue.createElementVNode("view", { class: "f-center mt-5 flex-column" }, [
                vue.createElementVNode("image", {
                  src: "/static/images//yun/xiao-shi.png",
                  class: "thumbnail2"
                }),
                vue.createElementVNode("view", { class: "mt-4 font-small" }, "还没有创建的班课")
              ])
            ],
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, vue.unref(curIndex) == 0]
          ]),
          vue.createCommentVNode("我加入的"),
          vue.withDirectives(vue.createElementVNode(
            "view",
            null,
            [
              vue.createCommentVNode("搜索框 "),
              vue.createElementVNode("view", { class: "flex mt-1 px-2" }, [
                vue.createElementVNode("view", { class: "position-relative border flex-5" }, [
                  vue.createElementVNode("view", { class: "search-icon text-light-muted border f-center" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-sousuo" })
                  ]),
                  vue.createElementVNode("input", {
                    type: "text",
                    placeholder: "搜索",
                    class: "search-box font-md pl-1"
                  })
                ]),
                vue.createElementVNode("text", { class: "flex-1 text-info font-weight-bold f-center" }, " 调序")
              ]),
              vue.createCommentVNode(" 主题内容 "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(course, (course2, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: course2.courseId,
                    index,
                    class: "border-bottom bg-white mb-2",
                    onClick: ($event) => turn(course2)
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "text-dark h4 font-weight-bold p-2" },
                      vue.toDisplayString(course2.courseName),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "flex px-2" }, [
                      vue.createElementVNode("view", { class: "flex-1" }, [
                        vue.createElementVNode("image", {
                          src: course2.courseCover,
                          class: "thumbnail"
                        }, null, 8, ["src"])
                      ]),
                      vue.createElementVNode("view", { class: "flex-4 ml-4" }, [
                        vue.createElementVNode("view", null, [
                          vue.createElementVNode(
                            "text",
                            null,
                            vue.toDisplayString(course2.courseClass),
                            1
                            /* TEXT */
                          )
                        ]),
                        vue.createElementVNode("view", { class: "mt-1" }, [
                          vue.createElementVNode(
                            "text",
                            { class: "text-muted mr-2" },
                            vue.toDisplayString(course2.semester),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "text",
                            { class: "text-info" },
                            vue.toDisplayString(course2.courseNo),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "flex-1 text-right" }, [
                        vue.createElementVNode("text", { class: "iconfont icon-right text-muted" })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "p-2 f-around" }, [
                      vue.createElementVNode("view", null, [
                        vue.createElementVNode("view", { class: "iconfont icon-select" }),
                        vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "签到")
                      ]),
                      vue.createElementVNode("view", null, [
                        vue.createElementVNode("view", { class: "iconfont icon-people" }),
                        vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "课堂")
                      ]),
                      vue.createElementVNode("view", null, [
                        vue.createElementVNode("view", { class: "iconfont icon-jiaoxuekejian" }),
                        vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "课件")
                      ]),
                      vue.createElementVNode("view", null, [
                        vue.createElementVNode("view", { class: "iconfont icon-liwuhuodong" }),
                        vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "活动")
                      ]),
                      vue.createElementVNode("view", null, [
                        vue.createElementVNode("view", { class: "iconfont icon-yuyin text-info" }),
                        vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "语音")
                      ])
                    ])
                  ], 8, ["index", "onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, vue.unref(curIndex) == 1]
          ])
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "D:/work/view/code/front/view-study/mosoteach/pages/index/index.vue"]]);
  const _sfc_main$g = {
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
      return {};
    },
    methods: {
      goback() {
        uni.navigateBack({
          delta: 1
          //返回上上上个页面
        });
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "flex pb-1 bg-white" }, [
      vue.createCommentVNode(" 左侧的图标 "),
      vue.withDirectives(vue.createElementVNode(
        "view",
        {
          class: "f-center pr-1",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goback && $options.goback(...args))
        },
        [
          vue.createElementVNode("text", { class: "iconfont icon-zuo" })
        ],
        512
        /* NEED_PATCH */
      ), [
        [vue.vShow, $props.back]
      ]),
      vue.withDirectives(vue.createElementVNode(
        "view",
        {
          class: "f-center pr-1",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goback && $options.goback(...args))
        },
        [
          vue.createElementVNode("text", null, "关闭")
        ],
        512
        /* NEED_PATCH */
      ), [
        [vue.vShow, $props.close]
      ]),
      vue.createCommentVNode(" 中间的文字 "),
      vue.createElementVNode(
        "view",
        { class: "flex-1 text-center" },
        vue.toDisplayString($props.word),
        1
        /* TEXT */
      ),
      vue.createCommentVNode(" 右面显示的内容 "),
      $props.right ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "pr-1"
        },
        vue.toDisplayString($props.rightV),
        1
        /* TEXT */
      )) : vue.renderSlot(_ctx.$slots, "default", { key: 1 })
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "D:/work/view/code/front/view-study/mosoteach/components/title-page/title-page.vue"]]);
  const _sfc_main$f = {
    name: "xuan-xiang-ka",
    props: {
      values: {},
      right: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {};
    },
    methods: {
      turn(e) {
        formatAppLog("log", "at components/xuan-xiang-ka/xuan-xiang-ka.vue:38", e);
        uni.navigateTo({
          url: e
        });
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 图片 "),
        vue.renderSlot(_ctx.$slots, "img"),
        vue.createCommentVNode(" 名字 "),
        vue.createElementVNode("view", { class: "flex-1" }, [
          vue.createElementVNode(
            "view",
            {
              onClick: _cache[0] || (_cache[0] = ($event) => $options.turn($props.values.url))
            },
            vue.toDisplayString($props.values.name),
            1
            /* TEXT */
          )
        ]),
        vue.createCommentVNode(" 中间的内容 "),
        vue.renderSlot(_ctx.$slots, "content"),
        vue.createCommentVNode(" 右面的> "),
        $props.right ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "f-center pr-0 pl-1"
        }, [
          vue.createElementVNode("text", { class: "iconfont-lg icon-right" })
        ])) : vue.renderSlot(_ctx.$slots, "default", { key: 1 })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "D:/work/view/code/front/view-study/mosoteach/components/xuan-xiang-ka/xuan-xiang-ka.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        values: [
          {
            name: "课程圈",
            url: "",
            img: "/static/images/springboot.jpg"
          },
          {
            name: "公开课",
            url: "",
            img: "/static/images/springboot.jpg"
          },
          {
            name: "云教材",
            url: "",
            img: "/static/images/springboot.jpg"
          },
          {
            name: "书香中国",
            url: "",
            img: "/static/images/springboot.jpg"
          }
        ]
      };
    },
    methods: {}
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0$1);
    const _component_title_page = resolveEasycom(vue.resolveDynamicComponent("title-page"), __easycom_1);
    const _component_xuan_xiang_ka = resolveEasycom(vue.resolveDynamicComponent("xuan-xiang-ka"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 自定义状态栏 "),
        vue.createVNode(_component_uni_status_bar),
        vue.createVNode(_component_title_page, { word: "发现" }),
        vue.createElementVNode("view", { class: "mt-3" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.values, (value, index) => {
              return vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                {
                  key: value.name
                },
                [
                  vue.createElementVNode("view", { class: "flex bg-white border p-1" }, [
                    vue.createVNode(_component_xuan_xiang_ka, { values: value }, {
                      img: vue.withCtx(() => [
                        vue.createElementVNode("image", {
                          src: value.img,
                          class: "thumbnail"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["values"])
                  ]),
                  index == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    style: { "margin-top": "80rpx" }
                  })) : vue.createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "D:/work/view/code/front/view-study/mosoteach/pages/find/find.vue"]]);
  let baseUrl = "/static/images/my/";
  const _sfc_main$d = {
    data() {
      return {
        person: {
          name: "薛龙",
          avatar: "/static/images/xl.jpg",
          show: [{
            name: "经验值",
            score: 2386
          }, {
            name: "魅力",
            score: 0
          }, {
            name: "蓝豆",
            score: 0
          }, {
            name: "心意",
            score: 0
          }],
          functions: [
            {
              name: "我的空间",
              url: baseUrl + "kongjian.png"
            },
            {
              name: "我的收藏",
              url: baseUrl + "shoucang.png"
            },
            {
              name: "心意卡片",
              url: baseUrl + "liwu.png"
            },
            {
              name: "任务中心",
              url: baseUrl + "renwu.png"
            },
            {
              name: "系统消息",
              url: baseUrl + "xiaoxi.png"
            }
          ],
          xunzhangs: [{
            name: "脑洞大开",
            url: baseUrl + "naodong.png"
          }, {
            name: "学以致用",
            url: baseUrl + "xuexi.png"
          }, {
            name: "一马当先",
            url: baseUrl + "chonglang.png"
          }, {
            name: "十八般武艺",
            url: baseUrl + "wuyi.png"
          }],
          options: [
            {
              name: "文件暂存区",
              url: "/pages/my/child/wen-jian-huan-cun"
            },
            {
              name: "分享给朋友",
              url: "",
              count: 0
            },
            {
              name: "用户协议",
              url: "/pages/my/child/yong-hu-xie-yi"
            },
            {
              name: "隐私政策",
              url: ""
            },
            {
              name: "设置",
              url: "/pages/my/child/she-zhi"
            }
          ]
        }
      };
    },
    methods: {}
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0$1);
    const _component_title_page = resolveEasycom(vue.resolveDynamicComponent("title-page"), __easycom_1);
    const _component_xuan_xiang_ka = resolveEasycom(vue.resolveDynamicComponent("xuan-xiang-ka"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" aaaa "),
      vue.createCommentVNode(" 自定义状态栏 "),
      vue.createVNode(_component_uni_status_bar),
      vue.createCommentVNode(" 标题 "),
      vue.createCommentVNode(' 	<view class="flex pb-1 bg-light">\r\n			<view class="flex-1 text-center">我的</view>\r\n			<view class="pr-1 ">帮助</view>\r\n		</view> '),
      vue.createVNode(_component_title_page, null, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(' 	<template #left>\r\n				<view class="f-center pr-1" >\r\n					<text class="iconfont icon-right"></text>\r\n				</view> '),
          vue.createCommentVNode(" </template> ")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createCommentVNode(" 头像 "),
      vue.createElementVNode("view", { class: "flex mb-2 bg-light" }, [
        vue.createElementVNode("view", { class: "ml-1" }, [
          vue.createElementVNode("image", {
            src: $data.person.avatar,
            class: "thumbnail"
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode(
          "view",
          { class: "f-center pl-1" },
          vue.toDisplayString($data.person.name),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "flex-1" }),
        vue.createElementVNode("view", { class: "f-center pr-1" }, [
          vue.createElementVNode("text", { class: "iconfont icon-right" })
        ])
      ]),
      vue.createCommentVNode("一些信息显示"),
      vue.createElementVNode("view", { class: "flex mb-2 bg-light" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.person.show, (value, index) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "border flex-1 text-center" }, [
              vue.createElementVNode(
                "view",
                { class: "text-info" },
                vue.toDisplayString(value.score),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "mt-1" },
                vue.toDisplayString(value.name),
                1
                /* TEXT */
              )
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" functions "),
      vue.createElementVNode("view", { class: "flex mb-2 bg-light" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.person.functions, (value, index) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "flex-1 text-center" }, [
              vue.createElementVNode("image", {
                src: value.url,
                class: "thumbnail2 rounded-circle"
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "view",
                { class: "font-sm text-muted mt-1" },
                vue.toDisplayString(value.name),
                1
                /* TEXT */
              )
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 样式测试 "),
      vue.createCommentVNode(' 		<view>\r\n			<span class="iconfont icon-liwu"></span>\r\n			<svg class="icon" aria-hidden="true">\r\n			  <use xlink:href="#icon-liwu"></use>\r\n			</svg>\r\n		</view> '),
      vue.createCommentVNode("我的勋章 "),
      vue.createElementVNode("view", { class: "mb-2 bg-light" }, [
        vue.createElementVNode("view", { class: "flex mb-2" }, [
          vue.createElementVNode("view", null, "我的勋章"),
          vue.createElementVNode("view", { class: "flex-1 text-right" }, "查看所有勋章"),
          vue.createElementVNode("view", { class: "f-center pr-1" }, [
            vue.createElementVNode("text", { class: "iconfont-lg icon-right" })
          ])
        ]),
        vue.createElementVNode("view", { class: "flex" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.person.xunzhangs, (value, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "flex-1 text-center" }, [
                vue.createElementVNode("image", {
                  src: value.url,
                  class: "thumbnail2 rounded-circle"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "view",
                  { class: "font-sm text-muted mt-1" },
                  vue.toDisplayString(value.name),
                  1
                  /* TEXT */
                )
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createCommentVNode(" 下面的选项卡 "),
      vue.createElementVNode("view", { class: "mb-2 bg-light" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.person.options, (value, index) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "border flex p-1" }, [
              vue.createVNode(_component_xuan_xiang_ka, { values: value }, vue.createSlots({
                _: 2
                /* DYNAMIC */
              }, [
                index == 1 ? {
                  name: "content",
                  fn: vue.withCtx(() => [
                    vue.createElementVNode(
                      "view",
                      null,
                      "累积分享" + vue.toDisplayString(value.count) + "次",
                      1
                      /* TEXT */
                    )
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["values"])
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "D:/work/view/code/front/view-study/mosoteach/pages/my/my.vue"]]);
  const _sfc_main$c = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0$1);
    const _component_title_page = resolveEasycom(vue.resolveDynamicComponent("title-page"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 自定义状态栏 "),
      vue.createVNode(_component_uni_status_bar),
      vue.createCommentVNode(" 标题 "),
      vue.createVNode(_component_title_page, {
        back: true,
        word: "文件缓存区",
        right: false
      }, {
        right: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "pr-1 text-dark" }, "管理")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createCommentVNode(" \r\n		 内容\r\n		 "),
      vue.createElementVNode("view", { class: "text-center container" }, [
        vue.createElementVNode("view", { class: "mt-5" }),
        vue.createElementVNode("view", { class: "f-center pr-1" }, [
          vue.createElementVNode("text", { class: "iconfont-lg icon-right" })
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", null, "还没有暂存到云班课的文件！"),
          vue.createElementVNode("view", null, " 你可以将其他的App中的文件分享到云班课 并选择保存到文件暂存区'，就可以在这里看到了")
        ])
      ])
    ]);
  }
  const PagesMyChildWenJianHuanCun = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "D:/work/view/code/front/view-study/mosoteach/pages/my/child/wen-jian-huan-cun.vue"]]);
  const _sfc_main$b = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0$1);
    const _component_title_page = resolveEasycom(vue.resolveDynamicComponent("title-page"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 自定义状态栏 "),
      vue.createVNode(_component_uni_status_bar),
      vue.createCommentVNode(" 标题 "),
      vue.createVNode(_component_title_page, {
        close: "true",
        word: "用户协议",
        right: false
      }),
      vue.createCommentVNode(" \r\n		 内容\r\n		 "),
      vue.createElementVNode("view", { class: "text-center container" }, [
        vue.createElementVNode("view", { class: "mt-5" }),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", null, "云班课用户协议！"),
          vue.createElementVNode("view", null, " 你可以将其他的App中的文件分享到云班课 并选择保存到文件暂存区'，就可以在这里看到了")
        ])
      ])
    ]);
  }
  const PagesMyChildYongHuXieYi = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "D:/work/view/code/front/view-study/mosoteach/pages/my/child/yong-hu-xie-yi.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        options: [
          {
            name: "缓存管理",
            url: "/pages/my/child/she-zhi-child/huan-cun-guan-li"
          },
          {
            name: "隐藏已结束班课",
            url: "",
            count: 0
          },
          {
            name: "账号安全",
            url: "/pages/my/child/yong-hu-xie-yi"
          },
          {
            name: "检查更新",
            url: ""
          },
          {
            name: "反馈、投诉与建议",
            url: "/pages/my/child/she-zhi"
          },
          {
            name: "隐私设置",
            url: "/pages/my/child/she-zhi"
          },
          {
            name: "关于我们",
            url: "/pages/my/child/she-zhi-child/guan-yu-wo-men"
          },
          {
            name: "注销账号",
            url: "/pages/my/child/she-zhi"
          }
        ]
      };
    },
    methods: {}
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0$1);
    const _component_title_page = resolveEasycom(vue.resolveDynamicComponent("title-page"), __easycom_1);
    const _component_xuan_xiang_ka = resolveEasycom(vue.resolveDynamicComponent("xuan-xiang-ka"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 自定义状态栏 "),
      vue.createVNode(_component_uni_status_bar),
      vue.createCommentVNode(" 标题 "),
      vue.createVNode(_component_title_page, {
        back: true,
        word: "设置",
        right: false
      }),
      vue.createCommentVNode(" \r\n		 选项卡\r\n		 "),
      vue.createElementVNode("view", { class: "mb-2" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.options, (value, index) => {
            return vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              [
                index == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "mt-3 mb-3 flex p-1 border bg-white"
                }, [
                  vue.createVNode(_component_xuan_xiang_ka, { values: value }, null, 8, ["values"])
                ])) : index == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "flex p-1 border bg-white"
                }, [
                  vue.createVNode(_component_xuan_xiang_ka, {
                    values: value,
                    right: false
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "f-center pr-0" }, [
                        vue.createElementVNode("checkbox", {
                          checked: _ctx.isChecked,
                          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.isChecked = !_ctx.isChecked)
                        }, null, 8, ["checked"])
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["values"])
                ])) : (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  class: "border flex p-1 bg-white"
                }, [
                  vue.createVNode(_component_xuan_xiang_ka, { values: value }, null, 8, ["values"])
                ]))
              ],
              64
              /* STABLE_FRAGMENT */
            );
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "border bg-white p-1 text-center text-danger" }, "退出账号")
    ]);
  }
  const PagesMyChildSheZhi = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "D:/work/view/code/front/view-study/mosoteach/pages/my/child/she-zhi.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        courses: [
          {
            courseId: 1,
            courseClass: "软件2242 Web2班",
            courseName: "后端工程开发",
            courseNo: "2942577",
            courseCover: "/static/images/springboot.jpg",
            courseTeacher: {
              name: "许莫淇",
              avatar: "/static/images/me.jpg"
            },
            semester: "2022-2023-2",
            finished: false,
            flag: false
          },
          {
            courseId: 2,
            courseClass: "软件2242 Web2班",
            courseName: "前端工程开发",
            courseNo: "9488275",
            courseCover: "/static/images/vue.jpg",
            courseTeacher: {
              name: "许莫淇",
              avatar: "/static/images/me.jpg"
            },
            semester: "2022-2023-2",
            finished: false,
            flag: false,
            size: "12kb"
          },
          {
            courseId: 3,
            courseClass: "软件2242 Web2班",
            courseName: "Web 应用开发",
            courseNo: "8175074",
            courseCover: "/static/images/web.jpg",
            courseTeacher: {
              name: "许莫淇",
              avatar: "/static/images/me.jpg"
            },
            semester: "2022-2023-2",
            finished: true,
            size: "13kb"
          },
          {
            courseId: 4,
            courseClass: "软件2242 Web2班",
            courseName: "Java程序设计",
            courseNo: "2942533",
            courseCover: "/static/images/java.jpg",
            courseTeacher: {
              name: "许莫淇",
              avatar: "/static/images/me.jpg"
            },
            semester: "2022-2022-2",
            finished: true,
            size: "14kb"
          }
        ],
        courseCircle: {
          size: "12kb"
        }
      };
    },
    methods: {}
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0$1);
    const _component_title_page = resolveEasycom(vue.resolveDynamicComponent("title-page"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 自定义状态栏 "),
      vue.createVNode(_component_uni_status_bar),
      vue.createCommentVNode(" 标题 "),
      vue.createVNode(_component_title_page, {
        back: true,
        word: "缓存管理",
        right: false
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "pr-1 text-dark" }, "清理选中")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createCommentVNode(" \r\n		 下面的内容\r\n		 "),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("view", { class: "mb-2" }, " 班课资源 "),
        vue.createElementVNode("view", { class: "mb-2" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.courses, (value, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "flex border mb-2 bg-white",
                key: value.courseId
              }, [
                vue.createElementVNode("view", { class: "border" }, [
                  vue.createElementVNode("image", {
                    src: value.courseCover,
                    class: "thumbnail2"
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "flex flex-column" }, [
                  vue.createElementVNode("view", { class: "flex" }, [
                    vue.createElementVNode(
                      "view",
                      null,
                      vue.toDisplayString(value.courseClass),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "pl-2" },
                      vue.toDisplayString(value.courseName),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "text-dark" },
                    vue.toDisplayString(value.size),
                    1
                    /* TEXT */
                  )
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "mb-2" }, " 班课资源 "),
        vue.createElementVNode("view", { class: "mb-2" }, [
          vue.createElementVNode("view", { class: "flex border mb-2 bg-white" }, [
            vue.createElementVNode("view", { class: "border" }, [
              vue.createElementVNode("image", {
                src: "/static/images/vue.jpg",
                class: "thumbnail2"
              })
            ]),
            vue.createElementVNode("view", { class: "flex flex-column" }, [
              vue.createElementVNode("view", null, " 课程圈缓存 "),
              vue.createElementVNode(
                "view",
                { class: "text-dark" },
                vue.toDisplayString($data.courseCircle.size),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "border bg-white p-1 text-center text-danger mt-3" }, "清除全部缓存")
      ])
    ]);
  }
  const PagesMyChildSheZhiChildHuanCunGuanLi = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "D:/work/view/code/front/view-study/mosoteach/pages/my/child/she-zhi-child/huan-cun-guan-li.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        values: {
          name: "更新日志"
        }
      };
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0$1);
    const _component_title_page = resolveEasycom(vue.resolveDynamicComponent("title-page"), __easycom_1);
    const _component_xuan_xiang_ka = resolveEasycom(vue.resolveDynamicComponent("xuan-xiang-ka"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 自定义状态栏 "),
      vue.createVNode(_component_uni_status_bar),
      vue.createCommentVNode(" 标题 "),
      vue.createVNode(_component_title_page, {
        back: true,
        word: "关于云班课",
        right: false
      }),
      vue.createElementVNode("view", { class: "flex f-center mb-3" }, [
        vue.createElementVNode("view", { class: "flex flex-column text-center" }, [
          vue.createElementVNode("view", { style: { "margin-top": "150rpx" } }),
          vue.createElementVNode("image", {
            src: "/static/yun-ban-ke.png",
            class: "thumbnail2"
          }),
          vue.createElementVNode("view", { class: "mt-2" }, "云班课"),
          vue.createElementVNode("view", { class: "mt-2 font-small" }, "Ver 5.4.19")
        ])
      ]),
      vue.createElementVNode("view", { class: "flex bg-white p-1" }, [
        vue.createVNode(_component_xuan_xiang_ka, {
          values: $data.values,
          class: ""
        }, null, 8, ["values"])
      ])
    ]);
  }
  const PagesMyChildSheZhiChildGuanYuWoMen = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "D:/work/view/code/front/view-study/mosoteach/pages/my/child/she-zhi-child/guan-yu-wo-men.vue"]]);
  const _sfc_main$7 = {
    name: "uniCollapse",
    emits: ["change", "activeItem", "input", "update:modelValue"],
    props: {
      value: {
        type: [String, Array],
        default: ""
      },
      modelValue: {
        type: [String, Array],
        default: ""
      },
      accordion: {
        // 是否开启手风琴效果
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      return {};
    },
    computed: {
      // TODO 兼容 vue2 和 vue3
      dataValue() {
        let value = typeof this.value === "string" && this.value === "" || Array.isArray(this.value) && this.value.length === 0;
        let modelValue = typeof this.modelValue === "string" && this.modelValue === "" || Array.isArray(this.modelValue) && this.modelValue.length === 0;
        if (value) {
          return this.modelValue;
        }
        if (modelValue) {
          return this.value;
        }
        return this.value;
      }
    },
    watch: {
      dataValue(val) {
        this.setOpen(val);
      }
    },
    created() {
      this.childrens = [];
      this.names = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.setOpen(this.dataValue);
      });
    },
    methods: {
      setOpen(val) {
        let str = typeof val === "string";
        let arr = Array.isArray(val);
        this.childrens.forEach((vm, index) => {
          if (str) {
            if (val === vm.nameSync) {
              if (!this.accordion) {
                formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:75", "accordion 属性为 false ,v-model 类型应该为 array");
                return;
              }
              vm.isOpen = true;
            }
          }
          if (arr) {
            val.forEach((v) => {
              if (v === vm.nameSync) {
                if (this.accordion) {
                  formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:85", "accordion 属性为 true ,v-model 类型应该为 string");
                  return;
                }
                vm.isOpen = true;
              }
            });
          }
        });
        this.emit(val);
      },
      setAccordion(self) {
        if (!this.accordion)
          return;
        this.childrens.forEach((vm, index) => {
          if (self !== vm) {
            vm.isOpen = false;
          }
        });
      },
      resize() {
        this.childrens.forEach((vm, index) => {
          vm.getCollapseHeight();
        });
      },
      onChange(isOpen, self) {
        let activeItem = [];
        if (this.accordion) {
          activeItem = isOpen ? self.nameSync : "";
        } else {
          this.childrens.forEach((vm, index) => {
            if (vm.isOpen) {
              activeItem.push(vm.nameSync);
            }
          });
        }
        this.$emit("change", activeItem);
        this.emit(activeItem);
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-3f050360"], ["__file", "D:/work/view/code/front/view-study/mosoteach/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue"]]);
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$6 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/work/view/code/front/view-study/mosoteach/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$5 = {
    name: "uniCollapseItem",
    props: {
      // 列表标题
      title: {
        type: String,
        default: ""
      },
      name: {
        type: [Number, String],
        default: ""
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否显示动画,app 端默认不开启动画，卡顿严重
      showAnimation: {
        type: Boolean,
        default: false
      },
      // 是否展开
      open: {
        type: Boolean,
        default: false
      },
      // 缩略图
      thumb: {
        type: String,
        default: ""
      },
      // 标题分隔线显示类型
      titleBorder: {
        type: String,
        default: "auto"
      },
      border: {
        type: Boolean,
        default: true
      },
      showArrow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        isOpen: false,
        isheight: null,
        height: 0,
        elId,
        nameSync: 0
      };
    },
    watch: {
      open(val) {
        this.isOpen = val;
        this.onClick(val, "init");
      }
    },
    updated(e) {
      this.$nextTick(() => {
        this.init(true);
      });
    },
    created() {
      this.collapse = this.getCollapse();
      this.oldHeight = 0;
      this.onClick(this.open, "init");
    },
    // TODO vue3
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    mounted() {
      if (!this.collapse)
        return;
      if (this.name !== "") {
        this.nameSync = this.name;
      } else {
        this.nameSync = this.collapse.childrens.length + "";
      }
      if (this.collapse.names.indexOf(this.nameSync) === -1) {
        this.collapse.names.push(this.nameSync);
      } else {
        formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue:154", `name 值 ${this.nameSync} 重复`);
      }
      if (this.collapse.childrens.indexOf(this) === -1) {
        this.collapse.childrens.push(this);
      }
      this.init();
    },
    methods: {
      init(type) {
        this.getCollapseHeight(type);
      },
      uninstall() {
        if (this.collapse) {
          this.collapse.childrens.forEach((item, index) => {
            if (item === this) {
              this.collapse.childrens.splice(index, 1);
            }
          });
          this.collapse.names.forEach((item, index) => {
            if (item === this.nameSync) {
              this.collapse.names.splice(index, 1);
            }
          });
        }
      },
      onClick(isOpen, type) {
        if (this.disabled)
          return;
        this.isOpen = isOpen;
        if (this.isOpen && this.collapse) {
          this.collapse.setAccordion(this);
        }
        if (type !== "init") {
          this.collapse.onChange(isOpen, this);
        }
      },
      getCollapseHeight(type, index = 0) {
        const views = uni.createSelectorQuery().in(this);
        views.select(`#${this.elId}`).fields({
          size: true
        }, (data) => {
          if (index >= 10)
            return;
          if (!data) {
            index++;
            this.getCollapseHeight(false, index);
            return;
          }
          this.height = data.height;
          this.isheight = true;
          if (type)
            return;
          this.onClick(this.isOpen, "init");
        }).exec();
      },
      getNvueHwight(type) {
        dom.getComponentRect(this.$refs["collapse--hook"], (option) => {
          if (option && option.result && option.size) {
            this.height = option.size.height;
            this.isheight = true;
            if (type)
              return;
            this.onClick(this.open, "init");
          }
        });
      },
      /**
       * 获取父元素实例
       */
      getCollapse(name = "uniCollapse") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse-item" }, [
      vue.createCommentVNode(" onClick(!isOpen) "),
      vue.createElementVNode(
        "view",
        {
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick(!$data.isOpen)),
          class: vue.normalizeClass(["uni-collapse-item__title", { "is-open": $data.isOpen && $props.titleBorder === "auto", "uni-collapse-item-border": $props.titleBorder !== "none" }])
        },
        [
          vue.createElementVNode("view", { class: "uni-collapse-item__title-wrap" }, [
            vue.renderSlot(_ctx.$slots, "title", {}, () => [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["uni-collapse-item__title-box", { "is-disabled": $props.disabled }])
                },
                [
                  $props.thumb ? (vue.openBlock(), vue.createElementBlock("image", {
                    key: 0,
                    src: $props.thumb,
                    class: "uni-collapse-item__title-img"
                  }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode(
                    "text",
                    { class: "uni-collapse-item__title-text" },
                    vue.toDisplayString($props.title),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ], true)
          ]),
          $props.showArrow ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: vue.normalizeClass([{ "uni-collapse-item__title-arrow-active": $data.isOpen, "uni-collapse-item--animation": $props.showAnimation === true }, "uni-collapse-item__title-arrow"])
            },
            [
              vue.createVNode(_component_uni_icons, {
                color: $props.disabled ? "#ddd" : "#bbb",
                size: "14",
                type: "bottom"
              }, null, 8, ["color"])
            ],
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-collapse-item__wrap", { "is--transition": $props.showAnimation }]),
          style: vue.normalizeStyle({ height: ($data.isOpen ? $data.height : 0) + "px" })
        },
        [
          vue.createElementVNode("view", {
            id: $data.elId,
            ref: "collapse--hook",
            class: vue.normalizeClass(["uni-collapse-item__wrap-content", { open: $data.isheight, "uni-collapse-item--border": $props.border && $data.isOpen }])
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 10, ["id"])
        ],
        6
        /* CLASS, STYLE */
      )
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-3d2dde9f"], ["__file", "D:/work/view/code/front/view-study/mosoteach/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue"]]);
  const _sfc_main$4 = {
    name: "tab-bar",
    props: {
      curIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        datas: [
          {
            urls: "/pages/index/child/zi-yuan",
            icon: "/static/tabbar/my.png",
            selectedIcon: "/static/tabbar/my-select.png",
            name: "资源",
            id: 1
          },
          {
            urls: "/pages/index/child/zi-yuan",
            icon: "/static/tabbar/my.png",
            selectedIcon: "/static/tabbar/my-select.png",
            name: "成员",
            id: 2
          },
          {
            urls: "/pages/index/child/ke-cheng",
            icon: "/static/tabbar/my.png",
            selectedIcon: "/static/tabbar/my-select.png",
            name: "活动",
            id: 3
          },
          {
            urls: "/pages/tcpj/orderSucceed",
            icon: "/static/tabbar/my.png",
            selectedIcon: "/static/tabbar/my-select.png",
            name: "消息",
            id: 4
          },
          {
            urls: "/pages/tcpj/orderSucceed",
            icon: "/static/tabbar/my.png",
            selectedIcon: "/static/tabbar/my-select.png",
            name: "详情",
            id: 5
          }
        ]
      };
    },
    methods: {
      tabClick(i, urls, id) {
        uni.reLaunch({
          url: urls
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tarbar" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.datas, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            onClick: ($event) => $options.tabClick(index, item.urls, item.id)
          }, [
            vue.createElementVNode("image", {
              src: $props.curIndex == index ? item.selectedIcon : item.icon,
              class: "thumbnail"
            }, null, 8, ["src"]),
            vue.createElementVNode("view", {
              textContent: vue.toDisplayString(item.name)
            }, null, 8, ["textContent"])
          ], 8, ["onClick"]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]);
  }
  const tabBar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-cfbd72b3"], ["__file", "D:/work/view/code/front/view-study/mosoteach/components/commons/tab-bar.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.renderSlot(_ctx.$slots, "default");
  }
  const tabBody = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/work/view/code/front/view-study/mosoteach/components/commons/tab-body.vue"]]);
  const _sfc_main$2 = {
    components: {
      tabBar,
      tabBody,
      unicollapse: __easycom_2
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
        value: ["0"],
        accordionVal: "1",
        content: "折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。",
        extraIcon: {
          color: "#000",
          size: "26",
          type: "image"
        },
        kechengs: [
          {
            name: "00.全课",
            count: 3,
            childs: [
              {
                name: "第四五周学习小结",
                url: "/static/logo.png",
                renshu: 23,
                jingyan: 10,
                state: 0
                //0代表进行中，1代表结束
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
              }
            ]
          },
          {
            name: "01.全课",
            count: 3,
            childs: [
              {
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
              }
            ]
          }
        ]
      };
    },
    methods: {
      changeCur(index) {
        this.curIndex2 = index;
      },
      add() {
        if (this.content.length > 35) {
          this.content = "折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。";
        } else {
          this.content = "折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。";
        }
      },
      onClick(e) {
        uni.showToast({
          title: "列表被点击"
        });
      },
      change(e) {
        formatAppLog("log", "at pages/index/child/ke-cheng.vue:239", e);
      }
    },
    onLoad: function(option) {
      if (option.course != null) {
        let course = JSON.parse(option.course);
        uni.setStorageSync("course", course);
        this.course = course;
      } else {
        const course = uni.getStorageSync("course");
        this.course = course;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0$1);
    const _component_title_page = resolveEasycom(vue.resolveDynamicComponent("title-page"), __easycom_1);
    const _component_ciew = vue.resolveComponent("ciew");
    const _component_uni_collapse = resolveEasycom(vue.resolveDynamicComponent("uni-collapse"), __easycom_2);
    const _component_uni_collapse_item = resolveEasycom(vue.resolveDynamicComponent("uni-collapse-item"), __easycom_3);
    const _component_tab_bar = vue.resolveComponent("tab-bar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 自定义状态栏 "),
      vue.createVNode(_component_uni_status_bar),
      vue.createCommentVNode(" 标题栏 "),
      vue.createVNode(_component_title_page, {
        back: true,
        word: $data.course.courseName,
        right: false
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "pr-1" }, "课堂表现")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["word"]),
      vue.createCommentVNode(" 选项卡 "),
      vue.createElementVNode("view", { class: "flex text-center bg-white border-bottom pt-2" }, [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["flex-1", $data.curIndex2 == 0 ? $data.select : ""]),
            onClick: _cache[0] || (_cache[0] = ($event) => $options.changeCur(0))
          },
          " 全部 ",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["flex-1", $data.curIndex2 == 1 ? $data.select : ""]),
            onClick: _cache[1] || (_cache[1] = ($event) => $options.changeCur(1))
          },
          " 进行中 ",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["flex-1", $data.curIndex2 == 2 ? $data.select : ""]),
            onClick: _cache[2] || (_cache[2] = ($event) => $options.changeCur(2))
          },
          " 已结束 ",
          2
          /* CLASS */
        )
      ]),
      vue.createCommentVNode(" 具体内容 "),
      vue.createElementVNode("view", null, [
        vue.withDirectives(vue.createElementVNode(
          "view",
          null,
          [
            vue.createVNode(_component_uni_collapse, {
              ref: "collapse",
              modelValue: $data.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value = $event),
              onChange: $options.change
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.kechengs, (val, index) => {
                    return vue.openBlock(), vue.createBlock(_component_uni_collapse_item, {
                      title: val.name
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_collapse, {
                          ref_for: true,
                          ref: "collapse",
                          modelValue: $data.value,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value = $event),
                          onChange: $options.change
                        }, {
                          default: vue.withCtx(() => [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(val.childs, (child, index2) => {
                                return vue.openBlock(), vue.createElementBlock("view", { class: "border" }, [
                                  vue.createVNode(
                                    _component_ciew,
                                    null,
                                    {
                                      default: vue.withCtx(() => [
                                        vue.createElementVNode("view", { class: "flex" }, [
                                          vue.createElementVNode("image", {
                                            src: child.url,
                                            class: "img"
                                          }, null, 8, ["src"]),
                                          vue.createElementVNode(
                                            "view",
                                            { class: "flex-1 f-start" },
                                            vue.toDisplayString(child.name),
                                            1
                                            /* TEXT */
                                          )
                                        ])
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  ),
                                  vue.createElementVNode("view", { class: "flex" }, [
                                    vue.createElementVNode(
                                      "view",
                                      null,
                                      vue.toDisplayString(child.renshu) + "人参与",
                                      1
                                      /* TEXT */
                                    ),
                                    vue.createElementVNode(
                                      "view",
                                      { class: "text-info flex-1 text-center" },
                                      vue.toDisplayString(child.jingyan) + "经验",
                                      1
                                      /* TEXT */
                                    ),
                                    child.state == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                                      key: 0,
                                      class: "text-info"
                                    }, [
                                      vue.createElementVNode("view", { class: "" }),
                                      vue.createTextVNode("进行中 ")
                                    ])) : (vue.openBlock(), vue.createElementBlock("view", {
                                      key: 1,
                                      class: "text-danger"
                                    }, " 已结束 "))
                                  ])
                                ]);
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["modelValue", "onChange"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title"]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "onChange"])
          ],
          512
          /* NEED_PATCH */
        ), [
          [vue.vShow, $data.curIndex2 == 0]
        ]),
        vue.withDirectives(vue.createElementVNode(
          "view",
          null,
          [
            vue.createVNode(_component_uni_collapse, {
              ref: "collapse",
              modelValue: $data.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.value = $event),
              onChange: $options.change
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.kechengs, (val, index) => {
                    return vue.openBlock(), vue.createBlock(_component_uni_collapse_item, {
                      title: val.name
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_collapse, {
                          ref_for: true,
                          ref: "collapse",
                          modelValue: $data.value,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.value = $event),
                          onChange: $options.change
                        }, {
                          default: vue.withCtx(() => [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(val.childs, (child, index2) => {
                                return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  { class: "border" },
                                  [
                                    vue.createElementVNode("view", { class: "flex" }, [
                                      vue.createElementVNode("image", {
                                        src: child.url,
                                        class: "img"
                                      }, null, 8, ["src"]),
                                      vue.createElementVNode(
                                        "view",
                                        { class: "flex-1 f-start" },
                                        vue.toDisplayString(child.name),
                                        1
                                        /* TEXT */
                                      )
                                    ]),
                                    vue.createElementVNode("view", { class: "flex" }, [
                                      vue.createElementVNode(
                                        "view",
                                        null,
                                        vue.toDisplayString(child.renshu) + "人参与",
                                        1
                                        /* TEXT */
                                      ),
                                      vue.createElementVNode(
                                        "view",
                                        { class: "text-info flex-1 text-center" },
                                        vue.toDisplayString(child.jingyan) + "经验",
                                        1
                                        /* TEXT */
                                      ),
                                      vue.createElementVNode("view", { class: "text-info" }, [
                                        vue.createElementVNode("view", { class: "" }),
                                        vue.createTextVNode("进行中 ")
                                      ])
                                    ])
                                  ],
                                  512
                                  /* NEED_PATCH */
                                )), [
                                  [vue.vShow, child.state == 0]
                                ]);
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["modelValue", "onChange"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title"]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "onChange"])
          ],
          512
          /* NEED_PATCH */
        ), [
          [vue.vShow, $data.curIndex2 == 1]
        ]),
        vue.withDirectives(vue.createElementVNode(
          "view",
          null,
          [
            vue.createVNode(_component_uni_collapse, {
              ref: "collapse",
              modelValue: $data.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.value = $event),
              onChange: $options.change
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.kechengs, (val, index) => {
                    return vue.openBlock(), vue.createBlock(_component_uni_collapse_item, {
                      title: val.name
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_collapse, {
                          ref_for: true,
                          ref: "collapse",
                          modelValue: $data.value,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.value = $event),
                          onChange: $options.change
                        }, {
                          default: vue.withCtx(() => [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(val.childs, (child, index2) => {
                                return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  { class: "border" },
                                  [
                                    vue.createElementVNode("view", { class: "flex" }, [
                                      vue.createElementVNode("image", {
                                        src: child.url,
                                        class: "img"
                                      }, null, 8, ["src"]),
                                      vue.createElementVNode(
                                        "view",
                                        { class: "flex-1 f-start" },
                                        vue.toDisplayString(child.name),
                                        1
                                        /* TEXT */
                                      )
                                    ]),
                                    vue.createElementVNode("view", { class: "flex" }, [
                                      vue.createElementVNode(
                                        "view",
                                        null,
                                        vue.toDisplayString(child.renshu) + "人参与",
                                        1
                                        /* TEXT */
                                      ),
                                      vue.createElementVNode(
                                        "view",
                                        { class: "text-info flex-1 text-center" },
                                        vue.toDisplayString(child.jingyan) + "经验",
                                        1
                                        /* TEXT */
                                      ),
                                      vue.createElementVNode("view", { class: "text-danger" }, [
                                        vue.createElementVNode("view", { class: "" }),
                                        vue.createTextVNode("已结束 ")
                                      ])
                                    ])
                                  ],
                                  512
                                  /* NEED_PATCH */
                                )), [
                                  [vue.vShow, child.state == 1]
                                ]);
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["modelValue", "onChange"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title"]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "onChange"])
          ],
          512
          /* NEED_PATCH */
        ), [
          [vue.vShow, $data.curIndex2 == 2]
        ])
      ]),
      vue.createCommentVNode(" 底部导航 "),
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_tab_bar, { curIndex: $data.curIndex }, null, 8, ["curIndex"])
      ])
    ]);
  }
  const PagesIndexChildKeCheng = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-72108ed2"], ["__file", "D:/work/view/code/front/view-study/mosoteach/pages/index/child/ke-cheng.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        curIndex: 0
      };
    },
    onLoad: function(option) {
      const course = uni.getStorageSync("course");
      this.course = course;
    },
    components: {
      tabBar
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), __easycom_0$1);
    const _component_title_page = resolveEasycom(vue.resolveDynamicComponent("title-page"), __easycom_1);
    const _component_tab_bar = vue.resolveComponent("tab-bar");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 自定义状态栏 "),
        vue.createVNode(_component_uni_status_bar),
        vue.createCommentVNode(" 标题栏 "),
        vue.createVNode(_component_title_page, {
          back: true,
          word: _ctx.course.courseName,
          right: false
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "pr-1 icon iconfont icon-sousuo" })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["word"]),
        vue.createElementVNode("view", null, " 资源。。。。。。。 "),
        vue.createCommentVNode(" 底部导航 "),
        vue.createElementVNode("view", null, [
          vue.createVNode(_component_tab_bar, { curIndex: $data.curIndex }, null, 8, ["curIndex"])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexChildZiYuan = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/work/view/code/front/view-study/mosoteach/pages/index/child/zi-yuan.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/find/find", PagesFindFind);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/my/child/wen-jian-huan-cun", PagesMyChildWenJianHuanCun);
  __definePage("pages/my/child/yong-hu-xie-yi", PagesMyChildYongHuXieYi);
  __definePage("pages/my/child/she-zhi", PagesMyChildSheZhi);
  __definePage("pages/my/child/she-zhi-child/huan-cun-guan-li", PagesMyChildSheZhiChildHuanCunGuanLi);
  __definePage("pages/my/child/she-zhi-child/guan-yu-wo-men", PagesMyChildSheZhiChildGuanYuWoMen);
  __definePage("pages/index/child/ke-cheng", PagesIndexChildKeCheng);
  __definePage("pages/index/child/zi-yuan", PagesIndexChildZiYuan);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/work/view/code/front/view-study/mosoteach/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
