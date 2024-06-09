<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-09-22 15:39:09
 * @Description: faceapi
-->
<template>
  <div>
    <video id="video" width="375" height="400" autoplay muted></video>
  </div>
</template>

<script>
import * as faceapi from "face-api.js";
export default {
  name: "FaceApiDetect",
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

  created() {},

  mounted() {
    // this.init();
  },

  methods: {
    async init() {
      // 打开摄像头
      const video = document.getElementById("video");
      const startVideo = () => {
        navigator.getUserMedia(
          { video: {} },
          (stream) => (video.srcObject = stream),
          (err) => console.error(err)
        );
      };

      //加载训练好的模型（weight，bias）
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("./models"), // 比Google的mobilenet更轻量级，速度更快一点
        faceapi.nets.faceLandmark68Net.loadFromUri("./models"), // 识别脸部特征用于mobilenet算法
        faceapi.nets.faceRecognitionNet.loadFromUri("./models"), // 识别人脸
        faceapi.nets.faceExpressionNet.loadFromUri("./models"), // 面部表情识别
      ]).then(startVideo);

      console.log(video);
      video.addEventListener("play", () => {
        console.log(video);
        const canvas = faceapi.createCanvasFromMedia(video);
        console.log(canvas);
        document.body.append(canvas);
        const displaySize = { width: video.width, height: video.height };
        faceapi.matchDimensions(canvas, displaySize);
        setInterval(async () => {
          // 脸部检测需要识别的功能api
          const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();

          // 脸部识别结果
          const resizedDetections = faceapi.resizeResults(
            detections,
            displaySize
          );

          // console.log(55,resizedDetections);
          canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height); // 去除上一张canvas绘制结果
          faceapi.draw.drawDetections(canvas, resizedDetections); // 绘制脸部识别
          faceapi.draw.drawFaceLandmarks(canvas, resizedDetections); // 绘制脸部特征点
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections); // 绘制脸部表情
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
video {
  object-fit: fill;
}
</style>
