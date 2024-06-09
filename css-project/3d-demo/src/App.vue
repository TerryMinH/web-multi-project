<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-09-22 15:41:45
 * @Description: file not
-->
<template>
  <div class="app-contanier">
    <TrackFace />
    <BoxGeometry />
    <!-- <MediaCamera /> -->
  </div>
</template>

<script>
import TrackFace from "@/components/TrackFace.vue";
import BoxGeometry from "@/components/BoxGeometry.vue";
import MediaCamera from "@/components/MediaCamera.vue";
export default {
  name: "App",
  components: {
    TrackFace,
    BoxGeometry,
    MediaCamera,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
body > canvas {
  position: absolute;
  top: 245px;
  left: 0px;
}
</style>
