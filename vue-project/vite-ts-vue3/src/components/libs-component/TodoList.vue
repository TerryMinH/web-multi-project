<!--
 * @Author: TerryMin
 * @Date: 2022-04-30 08:06:40
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-30 08:34:13
 * @Description: file not
-->

<template>
	<div>
		<input type="text" v-model="title" @keydown.enter="addTodo" />
		<button v-if="active < all" @click="clear">清理</button>
		<ul v-if="todos.length">
			<li v-for="todo in todos">
				<input type="checkbox" v-model="todo.done" />
				<span :class="{ done: todo.done }"> {{ todo.title }}</span>
			</li>
		</ul>
		<div v-else>暂无数据</div>
		<div>
			全选<input type="checkbox" v-model="allDone" />
			<span> {{ active }} / {{ all }} </span>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
let title = ref("");
let todos = ref([{ title: "学习Vue", done: false }]);
const count = ref(0)

function addTodo() {
	todos.value.push({ title: title.value, done: false });
	title.value = "";
}
function clear() {
	todos.value = todos.value.filter((v) => !v.done);
}
// 激活的item
let active = computed(() => {
	return todos.value.filter((v) => !v.done).length;
});
// total
let all = computed(() => todos.value.length);

let allDone = computed({
	get: function () {
    console.log(active)
		return active.value === 0;
	},
	set: function (value) {
    console.log(value)
		todos.value.forEach((todo) => {
			todo.done = value;
		});
	},
});
</script>
