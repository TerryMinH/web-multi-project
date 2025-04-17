# 常见算法思路分类

- 排序算法

  1. [十大经典排序算法](https://www.cnblogs.com/onepixel/p/7674659.html)

- 搜索:

  1. 采用的策略多种多样。线性搜索是从数据结构的一端开始，逐个检查元素，直到找到目标元素或遍历完整个数据结构

  ```js
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  ```

- 二分查找:

  1.定义:也称为折半查找，是一种在有序数组中查找特定元素的搜索算法。

  2.适用场景:专门用于在有序序列中进行高效的查找操作，如在有序数组中查找某个特定的数字、在有序字符串数组中查找某个字符串等。如果数据是无序的，二分查找就无法发挥作用，需要先进行排序才能使用。

  3.实现方式:通常使用循环（如 while 循环）来实现，通过不断更新搜索区间的边界来缩小查找范围。也可以使用递归的方式实现，但一般来说，非递归的实现方式在性能上更优，因为它避免了函数调用的开销

  ```js
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }
  ```

- 递归:

  1.定义:是一种直接或间接调用自身函数或方法的算法策略。它将一个大问题逐步分解为规模更小的子问题，直到子问题满足某个基本条件（递归基），然后从这些基本情况开始逐步构建出原问题的解。

  2. 应用场景:适用于问题可以自然地分解为相似子问题的情况，如树的遍历（前序、中序、后序遍历）、图的遍历（深度优先搜索）、分治算法（归并排序、快速排序的部分实现）等。这些问题通过递归的方式可以很简洁地描述和解决，代码结构清晰易懂。

  3. 实现方式:主要通过函数自身的调用和返回机制来实现。在函数内部，首先判断是否满足递归基条件，如果满足则直接返回结果；否则，将问题分解为子问题，并调用自身来解决子问题，最后将子问题的结果进行合并或处理，得到原问题的答案

- 贪心算法(Greedy Algorithm)

  1. 定义:贪心算法的核心在于在每一个决策点上，都做出在当前看来是最好的选择，而不考虑该选择对后续步骤的影响。它通过局部最优的选择来构建全局最优解。

  2. 常见的应用场景包括：
     2.1 活动选择问题：在一组活动中选择最多的不冲突活动。
     2.2 找零问题：用最少数量的硬币凑出指定的金额。
     2.3 最小生成树问题：如 Prim 算法和 Kruskal 算法。

  ```js
  // 假设有面额为 25 美分、10 美分、5 美分和 1 美分的硬币，要找零 n 美分，求最少需要多少枚硬币。
  function coinChange(n) {
    const coinValues = [25, 10, 5, 1];
    let coinCount = 0;

    for (let i = 0; i < coinValues.length; i++) {
      // 计算当前面额硬币的最大使用数量
      const coins = Math.floor(n / coinValues[i]);
      coinCount += coins;
      // 剩余需要找零的金额
      n %= coinValues[i];
    }

    return coinCount;
  }

  // 测试
  const amount = 63;
  const result = coinChange(amount);
  console.log(`找零 ${amount} 美分最少需要 ${result} 枚硬币`);
  ```

- 分治算法（Divide and Conquer）

  1.定义: 分治算法的核心思想是将一个复杂的大问题分解为若干个相互独立且结构与原问题相似的小问题，然后递归地解决这些小问题，最后将小问题的解合并起来得到原问题的解。

  2.  常见应用场景
      2.1 排序算法：如归并排序、快速排序。
      2.2 矩阵乘法：Strassen 算法。
      2.3 最近点对问题：在平面上找出距离最近的两个点。

  ```js
  // 归并排序
  function mergeSort(arr) {
    // 分解步骤：如果数组长度小于等于 1，直接返回
    if (arr.length <= 1) {
      return arr;
    }

    // 找到数组的中间位置
    const mid = Math.floor(arr.length / 2);

    // 递归地对左右子数组进行排序
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // 合并步骤：将排好序的左右子数组合并
    return merge(left, right);
  }
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // 比较左右子数组的元素，将较小的元素依次放入结果数组
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // 当其中一个数组遍历完后，将另一个数组中剩余的元素添加到 result 数组的末尾。
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  // 测试
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(unsortedArray);
  console.log("排序后的数组:", sortedArray);
  ```

- 动态规划(Dynamic programming，简称 DP)

  1. 定义： 是一种通过把原问题分解为相对简单的子问题，并保存子问题的解来避免重复计算，从而解决复杂问题的算法策略。

  2. 动态规划和分治法区别:动态规划是通过定义子问题，先求解子问题，然后在由子问题的解组合出原问题的解。但是它们之间的不同点是**分治法的子问题之间是相互独立的，而动态规划的子问题之间存在堆叠关系**（递推关系式确定的递推关系）

  3. 适用场景：

     3.1 求最大值，最小值
     3.2 判断方案是否可行
     3.3 统计方案个数

  ```js
  // 斐波那契数列是一个经典的动态规划问题，其定义为：F(0)=0,F(1)=1,F(n)=F(n-1)+F(n-2) (n>=2)。
  function fibonacci(n) {
    // 处理 n 为 0 或 1 的情况
    if (n === 0) return 0;
    if (n === 1) return 1;

    // 初始化状态数组
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    // 状态转移
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    // 返回最终结果
    return dp[n];
  }

  // 测试
  const n = 10;
  console.log(`斐波那契数列第 ${n} 项的值为: ${fibonacci(n)}`);

  // 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。如:nums = [-2,1,-3,4,-1,2,1,-5,4];连续子数组 [4,-1,2,1] 的和最大，为 6 。
  function maxSubArray(arr) {
    const n = arr.length;
    const dp = new Array(n);
    dp[0] = arr[0];
    let maxSum = dp[0];

    for (let i = 0; i < n; i++) {
      // 前多项和相加如果没有特定某项大,则从特定某项开始重新计算
      dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
      maxSum = Math.max(maxSum, dp[i]);
    }
    return maxSum;
  }
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSubArray(nums));
  ```

- 哈希算法

- 回溯法 (Backtracking)

  1. 定义：回溯法的基本思想是深度优先搜索（DFS），它会系统地搜索问题的所有可能解。在搜索过程中，每一步都会尝试一个可能的选择，如果这个选择导致无法得到有效的解，就撤销该选择，回溯到上一步，再尝试其他的选择，直到找到问题的解或者遍历完所有可能的解。
  2. 适用场景：回溯法通常用于解决组合优化问题、排列问题、子集问题、路径搜索问题等。例如：
     2.1 八皇后问题：在 8×8 的棋盘上放置 8 个皇后，使得它们互不攻击（即任意两个皇后都不能处于同一行、同一列或同一斜线上）。
     2.2 全排列问题：给定一个不含重复数字的数组，返回其所有可能的全排列。
     2.3 子集问题：给定一个集合，找出它的所有子集。

- 字符串匹配算法

- 双循环与双指针的区别

  1. 双循环：
     1.1 双循环指的是在代码里嵌套使用两个循环结构（如 for 循环、while 循环）。外层循环控制一个变量的遍历范围，内层循环则在每次外层循环迭代时，对另一个变量进行遍历。
     1.2 适用场景：适用于需要对数据进行全面比较或者组合的场景，比如查找数组中的所有元素对、计算矩阵中元素的总和等。时间复杂度通常为  O(n\*n)
  2. 双指针：
     2.1 双指针是一种使用两个指针（变量）在数组、链表等数据结构上进行遍历的技巧。这两个指针可以同向移动、相向移动或者反向移动，通过指针的移动来解决问题。
     2.2 适用场景：常用于处理有序数组、链表等数据结构，可用于解决查找、排序、合并等问题，例如两数之和、数组去重、反转数组等。时间复杂度通常为  (O(n))

     ```js
     // 通过 双指针 进行数组去重且不生成新数组
     function removeDuplicates(nums) {
       if (nums.length === 0) return 0;
       // 慢指针，记录去重后数组的位置
       let slow = 0;
       // 快指针，用于遍历原数组
       for (let fast = 1; fast < nums.length; fast++) {
         if (nums[fast] !== nums[slow]) {
           slow++;
           // 将不重复的元素移动到慢指针位置
           nums[slow] = nums[fast];
         }
       }
       // 截取数组，只保留去重后的元素
       nums.length = slow + 1;
       return nums.length;
     }

     // 示例用法
     const nums = [1, 1, 2, 2, 3, 4, 4, 4, 5];
     const newLength = removeDuplicates(nums);
     console.log(nums.slice(0, newLength));

     // 通过 indexOf 和 lastIndexOf 方法来判断元素是否重复，若重复则使用 splice 方法移除。
     function removeDuplicatesInPlace(arr) {
       for (let i = 0; i < arr.length; i++) {
         if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
           arr.splice(i, 1);
           i--;
         }
       }
       return arr;
     }

     const arr = [1, 2, 2, 3, 4, 4, 5];
     removeDuplicatesInPlace(arr);
     console.log(arr);
     ```

- 滑动窗口
  1. 滑动窗口(Sliding Window)是一种常用于解决数组/字符串子区间或子序列相关问题的算法技巧，特别适用于需要在连续数据序列上执行某些计算的场景。
  2. 适用场景：
     2.1 输入数据结构：通常是数组、字符串、链表等线性结构
     2.2 问题要求：寻找子区间、子序列、子字符串的最优解
     2.3 关键词："连续子数组/子串"、"最长/最短"、"包含/不包含某些元素"、"满足特定条件"
