/*
 * @Author: TerryMin
 * @Date: 2024-07-29 17:58:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-08-27 15:49:49
 * @Description: file not
 */

const callbackUrl ="http://36.155.98.130/mgyy/site/prd/index.html";
const WHITE_RULES = [/^https?:\/\/movie\.miguvideo\.com$/, /^https?:\/\/36.155.98.130$/,/^https?:\/\/36\.155\.98\.130\/mgyy\/.*$/];

const isLegal = WHITE_RULES.some((rule) => {
  try {
    const originName = new URL(callbackUrl).origin;
    return rule.test(originName);
  } catch (error) {
    console.error(error);
    return false;
  }
});
// console.log('isLegal==>',isLegal);

const str='aabbcc';
const result=str.replace(/aa/g, 'DD');
// console.log(result);

const paths = [
  '\\/mgs\\/msite|website',
  '\\/m\\/home',
  '\\/m\\/detail',
  '\\/m\\/liveDetail',
  '\\/m\\/vertical',
  '\\/p\\/'
];
const reg = new RegExp(paths.join('|'));
console.log(reg);