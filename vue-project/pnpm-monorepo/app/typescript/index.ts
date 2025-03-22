/*
 * @Author: TerryMin
 * @Date: 2024-06-09 10:08:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-22 20:27:17
 * @Description: file not
 */
type Person = {
  name: string;
  age: number;
};
// 结果：'name' | 'age'
type result = keyof Person;

const instance: result = "age";
