<!--
 * @Author: TerryMin
 * @Date: 2024-06-09 10:08:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-01 07:44:14
 * @Description: file not
-->
<template>
	<div>
		<Suspense>
			<template #default>
				<AsyncDataComponent />
			</template>
			<template #fallback>
				<div>数据加载中...</div>
			</template>
		</Suspense>
	</div>
	<PlayChildComponent :address="'中国'"></PlayChildComponent>
	<button @click="handleBtn"> 按钮点击{{ count }} </button>
</template>

<script setup>
import { defineAsyncComponent, reactive, ref } from 'vue';

const count = ref(0)
const AsyncDataComponent = defineAsyncComponent(() =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				template: '<div>异步加载的数据已显示</div>'
			});
		}, 2000);
	})
);

const handleBtn = () => {
	count.value++;
}
</script>