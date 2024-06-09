<!--
 * @Author: TerryMin
 * @Date: 2022-06-15 11:21:48
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-13 20:24:26
 * @Description: file not
-->

# JS 正则表达式
## 解析 (JS 正则表达完整教程-老姚)[https://juejin.cn/post/6844903487155732494#heading-8]

正则基本概念:

正则是匹配模式: 1.匹配字符，2.匹配位置。

## 正则表达式字符匹配

1. 字符组

   > \d 就是[0-9]。表示是一位数字。记忆方式：其英文是 digit（数字）。
   > \D 就是[^0-9]。表示除数字外的任意字符。
   > \w 就是[0-9a-zA-Z_]。表示数字、大小写字母和下划线。记忆方式：w 是 word 的简写，也称单词字符。
   > \W 是[^0-9a-za-z_]。非单词字符。
   > \s 是[ \t\v\n\r\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。记忆方式：s 是 space character 的首字母。
   > \S 是[^ \t\v\n\r\f]。 非空白符。.就是[^\n\r\u2028\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符除外。记忆方式：想想省略号...中的每个点，都可以理解成占位符，表示任何类似的东西。

2. 两种模糊匹配

- 横向模糊匹配：横向模糊指的是，一个正则可匹配的字符串的长度不是固定的，可以是多种情况的。其实现的方式是使用量词。譬如{m,n}，表示连续出现最少 m 次，最多 n 次。

- 纵向模糊匹配：纵向模糊指的是，一个正则匹配的字符串，具体到某一位字符时，它可以不是某个确定的字符，可以有多种可能。其实现的方式是使用字符组。譬如[abc]，表示该字符是可以字符“a”、“b”、“c”中的任何一个

```js
// 横向模糊匹配
var regex = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log(string.match(regex));
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]

// 纵向模糊匹配
var regexOther = /a[123]b/g;
var string1 = "a0b a1b a2b a3b a4b";
console.log(string1.match(regexOther));
// => ["a1b", "a2b", "a3b"]
```

3. 多选分支

分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了。

```js
var regex = /good|goodbye/g;
var string = "goodbye";
console.log(string.match(regex));
// => ["good"]

var regexOther = /goodbye|good/g;
console.log(string.match(regexOther));
// => ["goodbye"]
```

4. 量词
   > {m,} 表示至少出现 m 次。
   > {m} 等价于{m,m}，表示出现 m 次。
   > ? 等价于{0,1}，表示出现或者不出现。记忆方式：问号的意思表示，有吗？ +等价于{1,}，表示出现至少一次。记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。 \*等价于{0,}，表示出现任意次，有可能不出现。记忆方式：看看天上的星星，可能一颗没有，可能零散有几颗，可能数也数不过来。

- 贪婪匹配和惰性匹配

```js
// 贪婪模式
var regex = /\d{2,5}/g;
var string = "123 1234 12345 123456";
console.log(string.match(regex));
// => ["123", "1234", "12345", "12345"]

// 惰性匹配
var regex1 = /\d{2,5}?/g;
console.log(string.match(regex1));
// => ["12", "12", "34", "12", "34", "12", "34", "56"]
```

## 正则表达式位置匹配

1. 位置:

```js
// \b是单词边界，具体就是\w和\W之间的位置，也包括\w和^之间的位置，也包括\w和$之间的位置。
var result = "[JS] Lesson_01.mp4".replace(/\b/g, "#");
console.log(result);
// => "[#JS#] #Lesson_01#.#mp4#"

// \B就是\b的反面的意思，非单词边界。例如在字符串中所有位置中，扣掉\b，剩下的都是\B的。
var result = "[JS] Lesson_01.mp4".replace(/\B/g, "#");
console.log(result);
// => "#[J#S]# L#e#s#s#o#n#_#0#1.m#p#4"
```

2. 匹配位置

- (?=p)、(?!p)、(?<=p)、(?<!p)

```js
// (?=p)，其中p是一个子模式，即p前面的位置
var result = "hello".replace(/(?=l)/g, "#");
console.log(result); // "he#l#lo"

// (?!p)就是(?=p)的反面意思
var result1 = "hello".replace(/(?!l)/g, "#");
console.log(result1); // "#h#ell#o#"

// (?<=p),符合p子模式后面位置
var result2 = "hello".replace(/(?<=l)/g, "#");
console.log(result2); // hel#l#o

// (?<!p)可以理解为(?<=p)匹配到的位置之外的位置都是属于(?<!p)的
var result3 = "hello".replace(/(?<!l)/g, "#");
console.log(result3); //#h#e#llo#

```

### 正则使用示例

1. [JS 正则匹配字符串中某段内容](https://blog.csdn.net/callmeCassie/article/details/106748451)

2. [JS正则校验工具](https://c.runoob.com/front-end/854/)
