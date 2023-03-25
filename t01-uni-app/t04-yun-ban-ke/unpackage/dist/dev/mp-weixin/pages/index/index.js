"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_status_bar2 = common_vendor.resolveComponent("uni-status-bar");
  _easycom_uni_status_bar2();
}
const _easycom_uni_status_bar = () => "../../components/uni-status-bar/uni-status-bar.js";
if (!Math) {
  _easycom_uni_status_bar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const course = common_vendor.reactive([
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
        flag: false
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
        finished: true
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
        finished: true
      }
    ]);
    let navBarHeight = common_vendor.ref(Number);
    let screenWidth = common_vendor.ref(Number);
    let buttonWidth = common_vendor.ref(Number);
    common_vendor.onLoad(() => {
      console.log("小程序页面初始化");
      screenWidth = common_vendor.wx$1.getSystemInfoSync().screenWidth;
      console.log("屏幕宽度" + screenWidth);
      buttonWidth = common_vendor.wx$1.getMenuButtonBoundingClientRect().width;
      console.log("胶囊宽度" + buttonWidth);
      let info = common_vendor.index.createSelectorQuery().select("#nav-bar");
      info.boundingClientRect((data) => {
        console.log("导航高度" + data.height);
        navBarHeight = data.height + 40;
      }).exec();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(screenWidth) - common_vendor.unref(buttonWidth) + "px",
        b: common_vendor.unref(navBarHeight) + "px",
        c: common_vendor.f(course, (course2, index, i0) => {
          return {
            a: common_vendor.t(course2.courseName),
            b: course2.courseCover,
            c: common_vendor.t(course2.courseClass),
            d: common_vendor.t(course2.semester),
            e: common_vendor.t(course2.courseNo),
            f: course2.courseId,
            g: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/work/view/code/front/view-study/mosoteach/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
