/*
 * @Author: TerryMin
 * @Date: 2025-04-24 08:37:00
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-24 10:41:58
 * @Description: file not
 */
type CustomReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

// Exclude是TS中的一个高级类型，其作用是从第一个联合类型参数中，将第二个联合类型中出现的联合项全部排除，只留下没有出现过的参数
type CustomExclude<T, U> = T extends U ? never : T;

// Extract和上面的Exclude刚好相反，它是将第二个参数的联合项从第一个参数的联合项中提取出来，当然，第二个参数可以含有第一个参数没有的项。
type CustomExtract<T, U> = T extends U ? never : U;

// 从某个对象类型中挑出一些属性出来
type CustomPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : T;
