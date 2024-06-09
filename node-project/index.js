/*
 * @Author: TerryMin
 * @Date: 2022-09-23 15:23:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-14 16:05:29
 * @Description: file not
 */
const formatTime = (time) => {
  // eslint-disable-next-line func-names
  Date.prototype.formatD = function (formatt) {
    const o = {
      "M+": this.getMonth() + 1, // month
      "d+": this.getDate(), // day
      "h+": this.getHours(), // hour
      "m+": this.getMinutes(), // minute
      "s+": this.getSeconds(), // second
      "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
      S: this.getMilliseconds(), // millisecond
    };
    let format = formatt;
    if (/(y+)/.test(format))
      format = format.replace(
        RegExp.$1,
        `${this.getFullYear()}`.substring(4 - RegExp.$1.length)
      );
    for (const k in o)
      if (new RegExp(`(${k})`).test(format))
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : `00${o[k]}`.substring(`${o[k]}`.length)
        );
    return format;
  };
  try {
    const date = new Date();
    console.log(11, date);
    date.setTime(time);
    console.log(date);
    const dateStr = date.formatD("yyyy-MM-dd");
    return dateStr;
  } catch (err) {
    return "9999-12-31";
  }
};
// console.log(formatTime(new Date()));
const dateFormat = (date, format = "yyyy/MM/dd hh:mm:ss") => {
  if (!date) return "";
  const args = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds(),
  };
  // console.log(args);

  // let result = '';
  // if (/(y+)/.test(format)) {
  // 	result = format.replace(
  // 		RegExp.$1,
  // 		`${date.getFullYear()}`.substr(4 - RegExp.$1.length)
  // 	);
  // }
  Object.keys(args).forEach((i) => {
    const n = args[i];
    if (new RegExp(`(${i})`).test(format)) {
      result = result.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? n : `00${n}`.substr(`${n}`.length)
      );
    }
  });
  console.log(result);
  return result;
};

