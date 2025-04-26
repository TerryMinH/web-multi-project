/*
 * @Author: TerryMin
 * @Date: 2024-06-09 10:08:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-26 08:19:35
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

type MyFirst<T extends any[]> = T extends [infer R, ...infer L] ? R : never;

type MyLength<T extends any> = T extends { length: number }
  ? T["length"]
  : never;

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T;
type MyPromise = Promise<number[]>;
type Unpacked<T> = T extends Promise<infer R> ? R : T;

type MyTupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

type MyExclude<T, U> = U extends T ? U : never;

type MyPromiseType<T> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyPromiseType<R>
    : R
  : never;

type MyIf<T extends boolean, U extends any, K> = T extends true ? U : K;

type MyConcat<T extends any[], U extends any[]> = [...T, ...U];

type MyIncludes<T extends any[], U> = U extends T[number] ? true : false;

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: (infer R)[]
) => any
  ? R
  : never;

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};
