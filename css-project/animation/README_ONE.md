<!--
 * @Author: TerryMin
 * @Date: 2023-02-02 18:53:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-01-05 11:08:04
 * @Description: file not
-->

# 动画

## [transform 变换](https://juejin.cn/post/6959407827047677965)

transform 主要包括以下几种:

1. 旋转 rotate
2. 扭曲 skew
3. 缩放 scale
4. 移动 translate
5. 矩阵变形 matrix。

## [transition 过渡动画](https://juejin.cn/post/6970885478967050254)

transition 族属性:

1. transition-property 指定使用过渡效果的 css 属性(all)
2. transition-duration 设置过渡动画持续时间(0s)
3. transition-timing-function 设置动画的时间函数(ease)
4. transition-delay 设置动画的延迟时间(0s)

## [animation 自定义动画 各个属性详解](https://blog.csdn.net/aSuncat/article/details/52588078)

[animation 属性](https://juejin.cn/post/6970883520168198158#heading-8):

1. animation-name：指定要绑定到选择器的关键帧的名称。
2. animation-duration：设置动画持续时间(0s)
3. animation-timing-function：定义时间函数,通过这个选项,可配置动画随时间的运动速率和轨迹(ease)
4. animation-delay：设置动画的延迟时间(0s)
5. animation-iteration-count ：设置动画执行的次数(默认 1, 值分两种:具体 number 数值、infinite 执行无限次)
6. animation-direction：设置动画执行方向(normal)
7. animation-fill-mode：设置动画的填充模式（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式(none)
8. animation-play-state：设置动画的执行状态，通常通过 JavaScript 动态控制(默认值为:running)
