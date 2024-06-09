/*
 * @Author: TerryMin
 * @Date: 2022-06-15 11:23:58
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-05-23 17:58:55
 * @Description: file not
 */
const str = "Hello";
const result = str.replace(/(?!l)/g, "#");
// console.log(result);

const numStr = "123456789";
const result1 = numStr.replace(/(?=(\d{3})+$)/g, ",");
// console.log(result1);

function replacer(match, p1, p2, p3, offset, string) {
    console.log(match, p1, p2, p3);
    console.log(offset, string);
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
var newString = "ss176r21481287".replace(/(\d{3})(\d{4})(\d{4})/, replacer);
console.log(newString); // abc - 12345 - #$*%


const desensitizationNumber=(value) =>{
	const regExp=/(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}/;
	// if(regExp.test(value)){
	// 	const reg = /(\d{3})\d{4}(\d{4})/;
	// 	value = value.replace(reg, '$1****$2');
	// }
	return regExp.test(value);
}
console.log(33,desensitizationNumber('<p><span style="color: #ecf0f1; font-size: 12px;">13221129741</span></p >'));