/*
 * @Author: TerryMin
 * @Date: 2022-06-16 13:25:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-16 14:00:29
 * @Description: file not
 */
// 队列
function Queue() {
	this.list = []
}
Queue.prototype = {
	enqueue(ele) {
		this.list.push(ele)
	},
  dequeue(){
   return this.list.shift();
  },
  front(){
    return this.list[0]
  },
  isEmpty(){
    return !!this.list.length
  },
  isSize(){
    return this.list.length;
  }
}
const queue=new Queue();

queue.enqueue(4);
queue.enqueue(8);
// console.log(queue.isSize());
// console.log(queue.front());

