<!--
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:47
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-11-22 09:50:36
 * @Description: file not
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="app-content">
      <input type="text" v-model="value" v-focus />
      <input type="submit" @click="submit" />
      <div>
        <div v-for="(item, index) in list" :key="index">
          {{ item }}
        </div>
      </div>
    </div>

    <div class="app-content demo-1">
      <div>
        防抖:<input v-debounce="{ fn: debounce, event: 'input', time: 1000 }" />
      </div>
      <div>
        节流：
        <button v-throttle="{ fn: throttle, time: 3000 }">throttle节流</button>
      </div>
    </div>

    <div class="app-content">
      <loading duration="2s" :isshow="show"></loading>
      <button @click="show = !show">显示/隐藏loading</button>
      <button @click="toast">显示taost弹出框</button>
    </div>

    <div class="app-content">
      <div>
        <button @click="handleBtn('first')">按钮1</button>
        <button @click="handleBtn('second')">按钮2</button>
      </div>

      <span ref="dom">{{ message }}</span> |
      <span>{{ message | componentFilter }}</span>
    </div>

    <div class="app-content">
      <div
        id="app"
        v-imageLoad="item.url"
        v-for="(item, index) in imageList"
        :key="index"
      ></div>
    </div>

    <button class="my-element">异步加载组件</button>

    <AnswerDialog
      @onClose="handleModal"
      :isShow="isScrollPopShow"
      v-scrollPop
    />
  </div>
</template>

<script>
import $ from "jquery";
import HelloWorld from "@/components/HelloWorld.vue";
import AnswerDialog from "@/components/AnswerDialog.vue";

export default {
  name: "HomeChild",
  components: {
    HelloWorld,
    AnswerDialog,
  },
  data: () => {
    return {
      message: "test22",
      msg: "LIMin",
      value: "",
      list: ["a", "b", "c"],
      isScrollPopShow: false,
      show: false,
      isShow: false, // 是否展示续答弹窗
      imageList: [
        {
          url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg",
        },
        {
          url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg",
        },
        {
          url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg",
        },
      ],
    };
  },

  mounted() {
    console.log(this);
    console.log(this.GLOBAL);
    console.log(this.changeData);
  },

  computed: {},

  // filter: https://www.jianshu.com/p/ad21df1914c5
  filters: {
    componentFilter(value) {
      return value + "!!!";
    },
  },

  methods: {
    handleModal(type) {
      console.log(type);
      this.isScrollPopShow = false;
    },

    submit() {
      this.list.push(this.value);
      this.value = "";
      console.log(this.value);
      this.isScrollPopShow = true;
      if ($) {
        $(".my-element").append("Some appended text.");
      }
    },
    debounce() {
      console.log("debounce 防抖");
    },

    throttle() {
      console.log("throttle 节流 只触发一次");
    },

    toast() {
      this.$toast("你好");
    },

    handleBtn(type) {
      switch (type) {
        case "first":
          this.list[0] = "上海";
          console.log(this.list);
          break;

        case "second":
          this.$set(this.list, 1, "北京");
          console.log("second:", this.list);
          break;
      }
    },
  },
};
</script>

<style lang="less">
@import "./HomeChild.less";
</style>
