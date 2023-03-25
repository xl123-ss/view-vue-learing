"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
            url: ""
          },
          {
            name: "我的收藏",
            url: ""
          },
          {
            name: "心意卡片",
            url: ""
          },
          {
            name: "任务中心",
            url: ""
          },
          {
            name: "系统消息",
            url: ""
          }
        ]
      }
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_status_bar2 = common_vendor.resolveComponent("uni-status-bar");
  _easycom_uni_status_bar2();
}
const _easycom_uni_status_bar = () => "../../components/uni-status-bar/uni-status-bar.js";
if (!Math) {
  _easycom_uni_status_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.person.avatar,
    b: common_vendor.t($data.person.name),
    c: common_vendor.f($data.person.show, (score, index, i0) => {
      return {
        a: common_vendor.t(score.score),
        b: common_vendor.t(score.name)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/view/code/front/view-study/mosoteach/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
