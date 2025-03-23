<!--
 * @Author: TerryMin
 * @Date: 2024-06-09 10:08:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-23 10:28:46
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
	<input v-focus />
</template>

<script setup>
import { defineAsyncComponent,getCurrentInstance } from 'vue';

const instance=getCurrentInstance();
console.log(instance);
const AsyncDataComponent = defineAsyncComponent(() =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				template: '<div>异步加载的数据已显示</div>'
			});
		}, 2000);
	})
);
</script>