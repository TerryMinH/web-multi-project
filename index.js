function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.legnth - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var arr = [3, 1, 2, 4, 8, 5, 10, 9];
function quickSort(arr) {
  if (arr.length == 0) {
    return [];
  }

  var cIndex = Math.floor(arr.length / 2);
  var c = arr.splice(cIndex, 1);
  var l = [];
  var r = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < c) {
      l.push(arr[i]);
    } else {
      r.push(arr[i]);
    }
  }
  return quickSort(l).concat(c, quickSort(r));
}

function insertSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

function shellSort(arr) {
  var len = arr.length;
  console.log(len);
  for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    console.log(gap);
    for (var i = gap; i < len; i++) {
      var j = i;
      var current = arr[i];
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
  return arr;
}
// console.log(shellSort(arr));
