<!--
 * @Author: TerryMin
 * @Date: 2022-06-16 09:35:23
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-19 07:47:14
 * @Description: file not
-->

# 数据结构与算法

[个人算法博客总结](https://i.cnblogs.com/tags/posts?tagId=4241828)

## 算法复杂度分析

- 时间复杂度(渐进时间复杂度（asymptotic time complexity）):表示算法的执行时间与数据规模之间的增长关系。

  1.  T(n)=O(f(n))
  2.  时间复杂度分析
      2.1 只关注循环执行次数最多的一段代码
      2.2 加法法则：总复杂度等于量级最大的那段代码的复杂度
      2.3 乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积

  3.  复杂度量级
      3.1![复杂度量级](https://static001.geekbang.org/resource/image/37/0a/3723793cc5c810e9d5b06bc95325bf0a.jpg?wh=1142*572)
      3.2 我们把时间复杂度为非多项式量级的算法问题叫作 NP（Non-Deterministic Polynomial，非确定多项式）问题。

- 空间复杂度:全称就是渐进空间复杂度（asymptotic space complexity），表示算法的存储空间与数据规模之间的增长关系。

  1.  我们常见的空间复杂度就是 O(1)、O(n)、O(n2 )，像 O(logn)、O(nlogn) 这样的对数阶复杂度平时都用不到。

## 数据结构:

- 数组（Array）:是一种线性表数据结构。它用一组连续的内存空间，来存储一组具有相同类型的数据。

  1.  ![线性表结构](https://static001.geekbang.org/resource/image/b6/77/b6b71ec46935130dff5c4b62cf273477.jpg?wh=1142*833)

- 队列（Queue）:是一种特殊的线性表；特殊之处在于它只允许在表的前端（front）即队头 进行删除操作，而在表的后端（rear）即队尾 进行插入操作，和栈一样，队列是一种操作受限制的线性表。即先进先出（FIFO）。（银行窗口排队例子）

- 栈（Stack）:栈是一种遵从先进后出 (LIFO) 原则的有序集合；在栈顶进行 元素的添加或者删除，另一端为栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。(堆叠的盘子例子)。

- 堆（Heap）:存放引用类型（如对象、数组、函数等），值大小不固定，栈内存中存放的地址指向堆内存中的对象； 堆是一种二叉树结构。它的存取数据的方式与书架非常相似。堆的特点是以“键值对”存储方式，存取方式和顺序无关

  1.  ![非线性表](https://static001.geekbang.org/resource/image/6e/69/6ebf42641b5f98f912d36f6bf86f6569.jpg?wh=1142*727)

- 链表（Linked List）:

- 散列表（Hash）:

- 跳表:

- 二叉树:

- Trie 树（Tree）:

- 图（Graph）

## 算法:

- 排序

  1. [十大经典排序算法](https://www.cnblogs.com/onepixel/p/7674659.html)
  2. ![排序算法图解](https://img2018.cnblogs.com/blog/849589/201903/849589-20190306165258970-1789860540.png)

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

  1.定义: 是一种通过把原问题分解为相对简单的子问题，并保存子问题的解来避免重复计算，从而解决复杂问题的算法策略。

  2.  动态规划和分治法区别:动态规划是通过定义子问题，先求解子问题，然后在由子问题的解组合出原问题的解。但是它们之间的不同点是分治法的子问题之间是相互独立的，而动态规划的子问题之间存在堆叠关系（递推关系式确定的递推关系）

  3.  动态规划一般适用于：

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

- 回溯算法

- 字符串匹配算法

## 线性表

- 链表:

  1. 线性表（线性存储结构）：把所有数据用一根线串起来，再存储到物理空间中。存储的是具有“一对一”关系的数据元素的集合。

  2. 线性表常用术语：
     2.1 某一元素的左侧相邻元素称为“直接前驱”，位于此元素左侧的所有元素都统称为“前驱元素”；
     2.2 某一元素的右侧相邻元素称为“直接后继”，位于此元素右侧的所有元素都统称为“后继元素”；

  3. 链表类型:
     3.1 顺序表：将数据依次存储在连续的整块物理空间中。顺序表存储数据时，会提前申请一整块足够大小的物理空间，然后将数据依次存储起来，具有“一对一”特性。
     3.2 链表：数据分散的存储在物理空间中，通过一根线保存着它们之间的逻辑关系。利用指针访问。

- 链表分类：JS 实现链表

  1.  单向链表：用于存储逻辑关系为 "一对一" 的数据。与顺序表不同，链表不限制数据的物理存储状态，即使用链表存储的数据元素，其物理存储位置是随机的。
  2.  双向链表：

  3.  单向循环链表

  4.  双向循环链表

[链表的实现与应用](https://www.cnblogs.com/jaxu/p/11277732.html)

## 树:

- 树相关术语：（https://juejin.im/post/5ad56de7f265da2391489be3#heading-2）
  根结点是树最顶层结点
  边是两个结点之间的连接
  子结点是具有父结点的结点
  父结点是与子结点有连接的结点
  叶子结点是树中没有子结点的结点（树得末端）
  高度是从下往上数。
  深度是从根节点往下层级。
  节点的度：节点拥有的子树的个数。

- 二叉树（Binary tree）：指树中的节点最多只能有两个子节点，一个是左子节点，一个是右子节点。左右子节点的顺序不能颠倒。即二叉树中不存在度大于 2 的节点树。二叉树的遍历有两种选择：

- 深度优先搜索（Depth-First Search，DFS）：（前中后序是相对根节点而言）广度优先算法实践
  前序遍历：根节点优先，之后是左节点，最后是右节点。
  中序遍历：左节点优先，之后是根节点，最后是右节点。
  后序遍历：左节点优先，之后是右节点，最后是根节点。
- 广度优先搜索（Breadth-First Search，BFS）：BFS 是一层层逐渐深入的遍历算法

- 二叉搜索树（BST——Binary Search Tree）是二叉树的一种，它规定在左子节点上存储小（比父节点）的值，在右子节点上（比父节点）存储大（或等于）的值。
  自平衡二叉搜索树（AVL——Adelson-Velskii-Landi）。在 AVL 中，任何一个节点左右两棵子树的高度之差最多为 1，添加或移除节点时，AVL 树会尝试自平衡。对 AVL 树的操作和对 BST 树的操作一样，不同点在于我们还需要重新平衡 AVL 树
  红黑树也是一种自平衡二叉搜索树，但是它对其中的节点做了很多特殊的规定，使得在操作树节点的性能上要优于 AVL。

[JS 树的实现](https://www.cnblogs.com/jaxu/p/11309385.html)

## 资源总结

[顺序存储结构与链式存储结构优缺点](https://blog.csdn.net/li_wen01/article/details/82986015#)
