<!--
 * @Author: TerryMin
 * @Date: 2024-06-09 10:08:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-22 10:51:31
 * @Description: file not
-->
<template>
	<div>
		<button @click="showModal = true">打开模态框</button>
		<div v-if="showModal" class="modal-overlay" @click="showModal = false">
			<div class="modal">
				<h2>这是一个模态框</h2>
				<p>模态框的内容</p>
				<button @click="showModal = false">关闭</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
</script>

<style lang="less" scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal {
	background-color: white;
	padding: 20px;
	border-radius: 4px;
}
</style>