/*
 * @Author: TerryMin
 * @Date: 2024-08-05 23:15:30
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-12 07:39:14
 * @Description: file not
 */
import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.less'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log(children)
    console.log(process.env.TARO_ENV);
  })

  // children 是将要会渲染的页面
  return children
}

export default App
