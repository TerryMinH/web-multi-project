<!--
 * @Author: TerryMin
 * @Date: 2024-06-09 10:08:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-27 07:37:08
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
	{{ object.id }}
</template>

<script setup>
import { defineAsyncComponent,reactive,ref } from 'vue';

const count = ref(0)
const object = { id: ref(1) }
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