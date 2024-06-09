/*
 * @Author: TerryMin
 * @Date: 2023-11-14 14:02:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-11-14 14:32:32
 * @Description: file not
 */
/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
