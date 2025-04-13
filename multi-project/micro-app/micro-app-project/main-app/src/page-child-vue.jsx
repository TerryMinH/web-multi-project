/*
 * @Author: TerryMin
 * @Date: 2025-04-13 15:23:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-13 15:26:35
 * @Description: file not
 */
import React from "react";

const PageVue = () => {
    return (
        <div>
            <micro-app
                name="child-app-vue"
                url="http://localhost:3001"
                baseroute="child-app-vue"
            ></micro-app>
        </div>
    )
};

export default PageVue;
