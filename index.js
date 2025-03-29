let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2];

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function quickSort(arr) {
  console.log(arr);
  if (arr.length === 0) {
    return [];
  }
  let mid = Math.floor(arr.length / 2);
  let current = arr.splice(mid, 1);
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(current, quickSort(right));
}
console.log(quickSort(arr));
