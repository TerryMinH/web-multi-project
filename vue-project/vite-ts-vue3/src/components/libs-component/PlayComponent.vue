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
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

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