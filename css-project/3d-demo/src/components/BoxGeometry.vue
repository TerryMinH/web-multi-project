<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-10-14 10:08:15
 * @Description: file not
-->
<template>
  <div></div>
</template>

<script>
import * as THREE from "three";
import Bus from "@/utils/eventBus";

export default {
  name: "BoxGeometry",
  data() {
    return {
      scene: null, // 场景
      renderer: null, // 渲染器
      camera: null, // 相机
      axios: null, // 坐标系
      rate: 0, // tana 值
      requestId: null, // 动画ID
      direction: true, // 动画方向变化
      targetRadian: 0, // 目标弧度
      minDegree: 0.007, // 最小转动角度
    };
  },

  mounted() {
    this.createSceneInit();

    // this.animate();

    // 监听角度方位变化
    Bus.$on("PositionAxios", (paramters) => {
      const { x, y } = paramters;

      console.log("paramters==>", x, y, y / x);

      this.targetRadian = Math.atan2(paramters.y, paramters.x) * 5;
      console.log(this.targetRadian);
      this.animate();
    });
  },

  methods: {
    // 创建立体几何体
    createSceneInit() {
      this.scene = new THREE.Scene(); // 创建坐标系场景

      this.camera = new THREE.PerspectiveCamera( // 创建相机
        75,
        (window.innerWidth * 2) / window.innerHeight,
        0.1,
        1000
      );

      this.renderer = new THREE.WebGLRenderer(); // 创建渲染器
      console.log(this.scene);
      console.log(this.camera);
      console.log(this.renderer);
      console.log(window.innerWidth, window.innerHeight);

      this.renderer.setSize(window.innerWidth, window.innerHeight / 2);
      document.body.appendChild(this.renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1).toNonIndexed(); // 添加1*1*1的立方体
      console.log("geometry:", geometry);

      const material = new THREE.MeshBasicMaterial({ vertexColors: true }); // 设置立方体材质颜色

      const positionAttribute = geometry.getAttribute("position");

      const colors = [];
      const color = new THREE.Color();
      console.log(positionAttribute);
      for (let i = 0; i < positionAttribute.count; i += 3) {
        color.set(Math.random() * 0xffffff);

        // 定义每个三角形顶点相同的颜色
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
      }

      // 定义属性
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      this.cube = new THREE.Mesh(geometry, material); // 生成网格对象 包含几何体和材质
      console.log(55, this.cube.rotation);
      this.cube.rotation.y = 0; // 立体初始值
      this.scene.add(this.cube); // 网格对象添加到场景中
      this.camera.position.z = 2; // 将摄像机在Z轴上移动
      this.renderer.render(this.scene, this.camera);
    },

    // 动画转动
    animate() {
      requestAnimationFrame(this.animate);
      this.cube.rotation.y = this.targetRadian;
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style scoped></style>
