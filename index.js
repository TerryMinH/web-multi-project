/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-21 16:33:27
 * @Description: file not
 */

// 编写一个函数，将arr1和arr2合并，并按照id排序，如果id相同则取time较大的那个对象，如果id不同则保留arr1和arr2中的对象。
// 输入数据 arr1，arr2
const arr1 = [
  {
    id: 1,
    name: "allen",
    time: "3",
  },
  {
    id: 2,
    name: "alice",
    time: "1",
  },
  {
    id: 9,
    name: "Bun",
    time: "1",
  },
  {
    id: 3,
    name: "Bun",
    time: "1",
  },
];
const arr2 = [
  {
    id: 1,
    name: "bob",
    time: "4",
  },
  {
    id: 2,
    name: "Nick",
    time: "2",
  },
  {
    id: 4,
    name: "Mark",
    time: "2",
  },
  {
    id: 5,
    name: "Frank",
    time: "6",
  },
];

// 输出结果 res
// const res = [
//     {
//         id: 1,
//         name: 'bob',
//         time: '4'
//     },
//     {
//         id: 2,
//         name: 'Nick',
//         time: '2'
//     },
//     {
//         id: 3,
//         name: 'Bun',
//         time: '1'
//     },
//     {
//         id: 4,
//         name: 'Mark',
//         time: '2'
//     },
//     {
//         id: 5,
//         name: 'Frank',
//         time: '6'
//     },
// ]

function mergeArr(arrOne, arrTwo) {
  const mergedArr = [...arrOne, ...arrTwo];
  mergedArr.sort((item1, item2) => item1.id - item2.id);
  // console.log(mergedArr);
  let mergeUnqArr = [];
  for (let i = 0; i < mergedArr.length - 1; i++) {
    let multiItemArr = mergedArr.filter((item) => mergedArr[i].id === item.id);
    console.log(multiItemArr);
    if (multiItemArr.length) {
      mergeUnqArr.push(multiItemArr[multiItemArr.length - 1]);
    } else {
      mergeUnqArr.push(mergedArr[i]);
    }
  }
  console.log(mergeUnqArr);
  return mergeUnqArr;
}
// mergeArr(arr1,arr2)
const result = arr1.reduce((accumulator, current, currentIndex, array) => {
  console.log(accumulator, current);
});
