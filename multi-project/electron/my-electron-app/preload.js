/*
 * @Author: TerryMin
 * @Date: 2025-04-22 07:59:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-22 09:37:16
 * @Description: file not
 */
/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
window.addEventListener('DOMContentLoaded', () => {
    console.log(33);
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
        console.log('versions==>',process.versions);
      replaceText(`${type}-version`, process.versions[type])
    }
  })
  