/*
 * @Author: TerryMin
 * @Date: 2025-04-13 15:25:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-13 15:28:04
 * @Description: file not
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./page-main";
import PageVue from "./page-child-vue";
import PageReact from "./page-child-react";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/child-app-vue" element={<PageVue />}></Route>
        <Route path="/child-app-react" element={<PageReact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
