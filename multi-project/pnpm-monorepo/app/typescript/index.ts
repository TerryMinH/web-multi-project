/*
 * @Author: TerryMin
 * @Date: 2024-06-09 10:08:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-24 16:03:38
 * @Description: file not
 */
// type MyPick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
// type Person = {
//   name: string;
//   age: number;
//   address: string;
//   sex: number;
// };
// type PickResult = MyPick<Person, "age" | "name">;

type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
type MyExclude<T, U> = T extends U ? never : T;

type Person = {
  name: string;
  age: number;
};
type result = keyof Person;
const t1: result = "name";

type CustomExclude1<T, U> = T extends U ? never : T;
type A = CustomExclude1<"key1" | "key2" | "key3", "key2">;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T;
type MyPromise = Promise<number[]>;
type Unpacked<T> = T extends Promise<infer R> ? R : T;

type MyReadOnly1<T> = {
  readonly [P in keyof T]: T[P];
};

type MyTupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};
type MyFirst<T extends any[]> = T extends [infer R, ...infer L] ? R : never;

type MyLength<T extends any> = T extends { length: number }
  ? T["length"]
  : never;

type MyExcludeResult<T, U extends T> = U extends T ? never : T;
