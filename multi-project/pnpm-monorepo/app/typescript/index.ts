/*
 * @Author: TerryMin
 * @Date: 2024-06-09 10:08:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-24 22:26:51
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
