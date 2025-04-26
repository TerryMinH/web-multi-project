/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-25 16:06:38
 * @Description: file not
 */
const nestArr = [
  {
    name: "home",
    child: [
      {
        name: "README.md",
      },
      {
        name: "index.html",
      },
      {
        name: "asserts",
        child: [
          {
            name: "logo.png",
          },
        ],
      },
    ],
  },
  {
    name: "test",
    child: [
      {
        name: "unit-test",
        child: [
          {
            name: "home",
            child: [
              {
                name: "login",
                child: [
                  {
                    name: "test.js",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function handleNestArr(nestArr, newPath = "") {
  let result = [];
  for (item of nestArr) {
    let currentPath = newPath ? `${newPath}/${item.name}` : `/${item.name}`;
    if (item.child) {
      result.push(...handleNestArr(item.child, currentPath));
    } else {
      result.push(currentPath);
    }
  }
  return result;
}
console.log(handleNestArr(nestArr));
const flatMenu = [
  { id: 1, name: "首页", parentId: null },
  { id: 2, name: "产品", parentId: null },
  { id: 3, name: "产品1", parentId: 2 },
  { id: 4, name: "产品2", parentId: 2 },
  { id: 5, name: "关于", parentId: null },
  { id: 6, name: "联系方式", parentId: 5 },
  { id: 7, name: "产品1-1", parentId: 3 },
];
