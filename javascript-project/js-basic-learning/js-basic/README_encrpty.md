<!--
 * @Author: TerryMin
 * @Date: 2024-04-14 06:54:55
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-05-22 08:36:54
 * @Description: file not
-->

## [Flex 布局：flex:1 与 flex:auto 详解](https://www.cnblogs.com/terrymin/p/14654621.html)

## JS 加解密

- encodeURI、decodeURI 与 encodeURIComponent、decodeURIComponent

1. encodeURI() 函数可把字符串作为 URI 进行编码。encodeURI() 函数是不会进行转义的: , / ? : @ & = + $ # (可以使用 encodeURIComponent() 方法分别对特殊含义的 ASCII 标点符号进行编码)
2. decodeURI() 方法可以解码 URI(通用资源标识符:UniformResourceIdentifier,简称"URI")

```js
const uri = "my test.php?name=ståle&car=saab测试";
const encodeUrl = encodeURI(uri);
const decodeUrl = decodeURI(encodeURI2);
```

- BASE64:btoa、atob 加密与解密
  Base64 适用场景: 是网络上最常见的用于传输 8Bit 字节码的编码方式之一，Base64 就是一种基于 64 个可打印字符来表示二进制数据的方法
  Base64 特征: 编码之后值特征是后面以=结尾

```js
const encodedData = window.btoa("Hello, world"); // 编码字符串
const decodedData = window.atob(encodedData); // 解码字符串
```

- MD5 加密: md5 是 RSA 数据安全公司开发的一种单向散列算法，非可逆，相同的明文产生相同的密文。因此校验可以比较加密之后的密文是否相同
  [前后端 MD5 加盐加密](https://blog.csdn.net/qq_43813351/article/details/118000458)

- 对称加密:是指加密和解密都用同一份密钥

1. DES(Data Encryption Standard) [DES 对称加密示例](https://www.cnblogs.com/shawWey/p/9330122.html)
2. AES 的意思是“高级加密标准”(Advanced Encryption Standard),它是 DES 算法的替代者.[AES 加解密示例](https://www.jianshu.com/p/a47477e8126a)

- 非对称加密：对应于一对密钥，称为私钥和公钥，用私钥加密后需要用公钥解密，用公钥加密后需要用私钥解密
  对称加密与非对称加密区别：对称加密的优点是运算速度快，缺点是互联网环境下无法将密钥安全的传送给对方。非对称加密的优点是可以安全的将公钥传递给对方，但是运算速度慢
  [RSA 非对称加解密示例](https://blog.csdn.net/weixin_42423019/article/details/82468626)

## 二进制 与 ASCII 表

- [JS 字符串与二进制相互转化](https://www.cnblogs.com/it-deepinmind/p/7430025.html)
- [JS 字符与 ASCII 码互转](https://blog.csdn.net/xiaobing_hope/article/details/78645273)
- [ASCII 码表](https://blog.csdn.net/ttmice/article/details/50978054)

```js
// 大写字母A-Z对应的ASCII码值是65-90
// 小写字母a-z对应的ASCII码值是97-122

// 将字母转为ascii嘛的方法:
var str = "A";
str.charCodeAt(); // 65

var str1 = "a";
str1.charCodeAt(); // 97

// 将ascii码转为对应字母的方法:
var num = 97;
String.fromCharCode(num); // 'a'

var num1 = 100;
String.fromCharCode(num1); // 'd'
```
