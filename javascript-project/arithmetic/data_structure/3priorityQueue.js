/*
 * @Author: TerryMin
 * @Date: 2022-06-16 13:49:42
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-16 13:59:37
 * @Description: file not
 */
// 优先队列

function PriorityQueue() {
	this.list = []
}
function EachElement(e, num) {
	this.element = e
	this.priority = num
}
PriorityQueue.prototype = {
	enqueue(e, priority) {
		// 1.创建新元素的实例对象
		let element = new EachElement(e, priority)

		// 2.判断队列是否为空
		if (this.list.length === 0) {
			this.list.push(element)
			return
		}

		// 3.队列不为空，遍历整个队列，比较优先级大小
		for (let i in this.list) {
			if (element.priority < this.list[i].priority) {
				this.list.splice(i, 0, element)
				return
			}
		}
		// 4.新元素优先级最小，直接添加到队列的后端
		this.list.push(element)
	},
	dequeue() {
		return this.list.shift()
	},
	front() {
		return this.list[0]
	},
	isEmpty() {
		return !!this.list.length
	},
	size() {
		return this.list.length
	},
	toString() {
		let string = ""
		for (let i in this.list) {
			string += `${thsi.list[i].element}:${this.lsit[i].priority}`
		}
	},
}
