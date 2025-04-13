/*
 * @Author: TerryMin
 * @Date: 2025-04-13 15:23:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-13 16:06:56
 * @Description: file not
 */
import React from "react";

const PageVue = () => {
    return (
        <div>
            <micro-app
                name="child-app-vue"
                url="http://localhost:8080"
                baseroute="child-app-vue"
            ></micro-app>
        </div>
    )
};

export default PageVue;
