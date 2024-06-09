<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-09-22 14:08:05
 * @Description: file not
-->
<template>
  <div>
    <button @click="takePhoto">点击打开摄像头</button>
    <!--video用于显示媒体设备的视频流，自动播放-->
    <video
      ref="myVideo"
      id="video"
      playsinline
      webkit-playsinline="true"
      autoplay
      loop
      muted
    ></video>

    <!--拍照按钮-->
    <button id="capture">拍照</button>
    <!--描绘video截图-->
    <canvas ref="myCanvas" id="myCanvas" width="360" height="320"></canvas>
  </div>
</template>

<script>
import {
  //   detectSingleFace,
  nets,
  //   matchDimensions,
  //   resizeResults,
  //   draw,
  SsdMobilenetv1Options,
  //   Box,
} from "face-api.js";
export default {
  name: "MediaCamera",
  components: {},
  props: {
    msg: String,
  },
  data: () => {
    return {
      showComp: false,
      apps: null,
    };
  },

  created() {
    // 指定面部检测器
    this.options = new SsdMobilenetv1Options({
      // 最小置信阈值
      // 默认值：0.5
      minConfidence: 0.9,
    });
  },

  mounted() {
    this.myCanvas = this.$refs["myCanvas"];
    this.myVideo = this.$refs["myVideo"];
    // this.init();
    this.initPhoto();

    // this.initViewFinder();
  },

  methods: {
    async init() {
      await nets.ssdMobilenetv1.loadFromUri("/models");
    },

    // 初始化摄像头准备拍照
    initPhoto() {
      const canvasEle = document.getElementById("myCanvas");
      const context = canvasEle.getContext("2d");
      const that = this;
      //注册拍照按钮的单击事件
      document.getElementById("capture").addEventListener("click", function () {
        console.log(context);
        console.log(that.myVideo);
        //绘制画面
        context.drawImage(that.myVideo, 0, 0, 480, 320);
      });
    },

    // 点击打开摄像头
    takePhoto() {
      //成功的回调函数
      const success = (stream) => {
        console.log(stream);

        //将视频流设置为video元素的源
        if ("srcObject" in this.myVideo) {
          this.myVideo.srcObject = stream;
        } else {
          //  旧的浏览器可能没有 srcObject,兼容webkit内核浏览器
          const CompatibleURL = window.URL || window.webkitURL;
          this.myVideo.src = CompatibleURL.createObjectURL(stream);
        }

        //播放视频
        this.myVideo.play();
      };

      //异常的回调函数
      const error = (error) => {
        console.log("访问用户媒体设备失败：", error.name, error.message);
      };

      //调用用户媒体设备，访问摄像头
      this.getUserMediaCamera(success, error);
    },

    // 调用摄像头
    getUserMediaCamera(success, error) {
      //优先使用前置摄像头（如果有的话）：{ video: { facingMode: "user" } }
      //强制使用后置摄像头：{ video: { facingMode: { exact: "environment" } } }
      // video: {
      //    width: { min: 1024, ideal: 1280, max: 1920 },
      //    height: { min: 776, ideal: 720, max: 1080 }
      // }
      this.width = 320;
      this.height = 300;
      console.log(889, this.width, this.height);
      //ideal（应用最理想的）值
      const constraints = {
        video: {
          facingMode: "user",
          width: { ideal: this.width },
          height: { ideal: this.height },
        },
      };
      if (navigator.mediaDevices.getUserMedia) {
        // 最新的标准API
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(success)
          .catch(error);
      } else if (navigator.webkitGetUserMedia) {
        // webkit核心浏览器
        navigator.webkitGetUserMedia(constraints, success, error);
      } else if (navigator.mozGetUserMedia) {
        // firfox浏览器
        navigator.mozGetUserMedia(constraints, success, error);
      } else if (navigator.getUserMedia) {
        // 旧版API
        navigator.getUserMedia(constraints, success, error);
      } else {
        alert("你的浏览器不支持访问用户媒体设备");
      }
    },

    /** @name 初始化取景框 */
    initViewFinder() {
      if (!this.video) return;
      const marginLeft = (this.video.videoWidth - this.boxWidth) / 2;
      const marginTop = (this.video.videoHeight - this.boxHeight) / 2;
      if (this.canvas) {
        this.canvas.width = this.video.videoWidth;
        this.canvas.height = this.video.videoHeight;
      }
      this.viewFinderBox = {
        topLeft: {
          x: marginLeft,
          y: marginTop,
        },
        topRight: {
          x: marginLeft + this.boxWidth,
          y: marginTop,
        },
        bottomLeft: {
          x: marginLeft,
          y: marginTop + this.boxHeight,
        },
        bottomRight: {
          x: marginLeft + this.boxWidth,
          y: marginTop + this.boxHeight,
        },
      };
    },
  },
};
</script>

<style scoped>
canvas {
  border: 1px solid #666;
}
video {
  object-fit: fill;
}
</style>
