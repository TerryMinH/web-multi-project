/*
 * @Author: TerryMin
 * @Date: 2022-06-16 09:34:54
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-16 11:37:38
 * @Description: file not
 */
// 栈
function Stack() {
	this.dataStore = []
	this.top = 0
}

Stack.prototype = {
	push(element) {
		this.dataStore[this.top++] = element
	},
	pop() {
		return this.dataStore[--this.top]
	},
  	// 查看栈顶元素
	peek() {
		if (this.top > 0) return this.dataStore[this.top - 1]
		else return "Empty"
	},
	clear() {
		this.dataStore = []
		this.top = 0
	},
	length() {
		return this.top
	},
}
const stack = new Stack()
stack.push("Apple")
stack.push("Banana")
stack.push("pear")

// 数制间转换
function mulBase(num, base) {
	const s = new Stack()
	do {
		s.push(num % base)
		num = Math.floor(num /= base)
	} while (num > 0)
	let converted = "";
	while (s.length() > 0) {
		converted += s.pop()
	}
	return converted
}
console.log(mulBase(5,2));
