const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // 由于 length 属性的值为 3，with() 会忽略该值
};
console.log(typeof module.exports);
