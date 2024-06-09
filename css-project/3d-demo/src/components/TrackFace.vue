<!--
 * @Author: TerryMin
 * @Date: 2023-08-09 11:42:37
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-10-16 11:06:32
 * @Description: file not
-->
<template>
  <div>
    <div class="demo-container">
      <video
        id="video"
        width="375"
        height="240"
        preload
        autoplay
        loop
        muted
        playsinline
      ></video>
      <canvas id="canvas" width="375" height="240"></canvas>
    </div>
  </div>
</template>

<script>
import dat from "dat.gui";
import tracking from "@/assets/lib/tracking-min.js";
import "@/assets/lib/face-min.js";
// import tracking from "@/assets/tracking/build/tracking-min.js";
// import "@/assets/tracking/build/data/face-min.js";
import Bus from "@/utils/eventBus";
import { throttle } from "@/utils/utils-fn";

export default {
  name: "TrackFace",
  components: {},
  data() {
    return {};
  },

  created() {},

  mounted() {
    // this.init();
  },

  methods: {
    init() {
      let canvas = document.getElementById("canvas");
      let context = canvas.getContext("2d");

      let tracker = new window.tracking.ObjectTracker("face"); // 设置追踪类型

      // 转头角度影响识别率
      tracker.setInitialScale(3); // 设置开始块缩放的初始比例
      tracker.setStepSize(1); // 设置区块步长
      tracker.setEdgesDensity(0.15); // 设置边缘密度

      window.tracking.track("#video", tracker, { camera: true });

      tracker.on("track", function (event) {
        // console.log(event);
        context.clearRect(0, 0, canvas.width, canvas.height);

        // 防抖函数
        const updateThree3D = throttle((x, y) => {
          Bus.$emit("PositionAxios", { x, y });
        }, 2000);

        if (event.data) {
          if (event.data.length === 1) {
            event.data.forEach(function (rect) {
              // console.log("tana==>", rect.y / rect.x);
              const { x, y } = rect;
              updateThree3D(x, y);

              context.strokeStyle = "#a64ceb";
              context.strokeRect(rect.x, rect.y, rect.width, rect.height);
              context.font = "11px Helvetica";
              context.fillStyle = "#fff";
              context.fillText(
                "x: " + rect.x + "px",
                rect.x + rect.width + 5,
                rect.y + 11
              );
              context.fillText(
                "y: " + rect.y + "px",
                rect.x + rect.width + 5,
                rect.y + 22
              );
            });
          } else {
            console.log(`保持人脸在相框正确部位:脸部数量${event.data.length}`);
          }
        }
      });

      // let gui = new dat.GUI();
      // gui.add(tracker, "edgesDensity", 0.1, 0.5).step(0.01);
      // gui.add(tracker, "initialScale", 1.0, 10.0).step(0.1);
      // gui.add(tracker, "stepSize", 1, 5).step(0.1);
    },
  },
};
</script>

<style scoped>
video,
canvas {
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #fff;
}

#btn {
  position: absolute;
  bottom: 0;
  cursor: pointer;
}
</style>
