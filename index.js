// 示例使用
const flatMenu = [
  { id: 1, name: "首页", parentId: 0 },
  { id: 2, name: "产品", parentId: 0 },
  { id: 3, name: "手机", parentId: 2 },
  { id: 4, name: "电脑", parentId: 2 },
  { id: 5, name: "关于我们", parentId: 0 },
  { id: 6, name: "iPhone", parentId: 3 },
  { id: 7, name: "MacBook", parentId: 4 },
];

function buildMenuTreeEfficient(items) {
  const map = {};
  const roots = [];

  // 先创建所有节点的引用
  items.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  // 建立父子关系
  items.forEach((item) => {
    const node = map[item.id];
    if (item.parentId !== 0) {
      map[item.parentId]?.children.push(node) || roots.push(node);
    } else {
      roots.push(node);
    }
  });

  return roots;
}

console.log(buildMenuTreeEfficient(flatMenu));
