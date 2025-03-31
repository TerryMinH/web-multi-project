<!--
 * @Author: TerryMin
 * @Date: 2024-04-14 06:54:55
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-30 16:53:25
 * @Description: file not
-->

# JS 安全加密

## 常见网络攻击类型

- XSS 与 CSRF 的区别

  1. XSS（跨站脚本攻击）
     1.1 定义：XSS 攻击是指攻击者通过在目标网站注入恶意脚本，当用户访问该网站时，这些脚本会在用户的浏览器中执行，从而获取用户的敏感信息(如 Cookie、会话令牌等)或者执行其他恶意操作。

     1.2 攻击方式：
     1.2.1 反射型 XSS：攻击者诱导用户点击包含恶意脚本的链接，服务器接收到请求后，将恶意脚本作为响应的一部分返回给用户的浏览器，脚本在浏览器中执行。例如，一个搜索页面的 URL 为 http://example.com/search?keyword=xxx，攻击者构造一个恶意链接 http://example.com/search?keyword=<script>alert('XSS')</script>，当用户点击该链接时，服务器将恶意脚本返回给浏览器并执行。
     1.2.2 存储型 XSS：攻击者将恶意脚本提交到目标网站的数据库中，当其他用户访问包含该恶意脚本的页面时，脚本会在浏览器中执行。例如，在一个评论系统中，攻击者提交一条包含恶意脚本的评论，当其他用户查看该评论时，脚本会在他们的浏览器中执行。
     1.2.3 DOM 型：攻击者通过修改页面的 DOM 结构，注入恶意脚本。这种攻击不依赖于服务器端的响应，而是直接在浏览器端操作。例如，一个页面通过 JavaScript 获取 URL 中的参数并插入到页面中，攻击者可以构造一个包含恶意脚本的 URL，当用户访问该 URL 时，脚本会在浏览器中执行。

     1.3 防范措施：
     1.3.1 输入验证和过滤：对用户输入的数据进行严格的验证和过滤，只允许合法的字符和格式。可以使用正则表达式或白名单机制来过滤输入。
     1.3.2 输出编码：在将用户输入的数据输出到页面时，进行适当的编码，将特殊字符转换为 HTML 实体。例如，将 < 转换为 &lt;，将 > 转换为 &gt;。
     1.3.3 设置 CSP（内容安全策略）：通过设置 CSP 头，限制页面可以加载的资源来源，只允许加载来自可信源的脚本、样式表等资源。

     ```js
     1. 通过设置HTTP Header的Content-Security-Policy
     2. 通过meta标签来设置，例如：<meta http-equiv="Content-Security-Policy">
     ```

  2. CSRF（跨站请求伪造）
     2.1 定义：CSRF 攻击是指攻击者通过诱导用户在已登录的网站上执行恶意操作，利用用户的身份信息向目标网站发送伪造的请求。

     2.2 攻击方式：
     2.2.1 GET 请求攻击
     2.2.2 POST 请求攻击

     2.3 防范措施：
     2.3.1 验证请求来源：服务器端可以通过检查请求的来源（如 Referer 头或 Origin 头）来判断请求是否来自合法的页面
     2.3.2 使用 CSRF 令牌：在表单或链接中添加一个随机生成的 CSRF 令牌，服务器端在处理请求时验证该令牌的有效性。
     2.3.3 设置 SameSite 属性：在 Cookie 中设置 SameSite 属性，限制 Cookie 在跨站请求时的发送。例如，将 SameSite 属性设置为 Strict 或 Lax，可以有效防止 CSRF 攻击。

- 其他安全攻击方式

  1. SQL 注入攻击：
     1.1 定义：攻击者通过在输入框或 URL 参数中注入恶意的 SQL 语句，破坏原有的 SQL 查询逻辑。
     1.2 防范错失：
     1.2.1 使用参数化查询：在执行 SQL 查询时，使用参数化查询，将用户输入作为参数传递给查询语句，而不是直接拼接在 SQL 语句中。
     1.2.2 输入验证和过滤：对用户输入进行严格的验证和过滤，只允许合法的字符和格式。

  2. 中间人攻击（MITM，Man - in - the - Middle Attack）
     2.1 定义：攻击者拦截并篡改客户端和服务器之间的通信，获取敏感信息或执行恶意操作。例如，攻击者在公共无线网络中设置一个虚假的热点，拦截用户的网络请求。
     2.2 防范措施：
     2.2.1 使用 HTTPS：HTTPS 协议通过 SSL/TLS 加密通信，确保数据在传输过程中的安全性。在网站中使用 HTTPS 证书，对数据进行加密传输。
     2.2.2 验证证书：客户端在建立 HTTPS 连接时，验证服务器的证书是否有效，防止连接到伪造的服务器。

  3. 点击劫持（Clickjacking）
     3.1 定义： 攻击者通过在一个透明的 iframe 中嵌入目标网站，然后在上面覆盖一个看似正常的页面，诱导用户在不知情的情况下点击 iframe 中的按钮或链接，执行恶意操作。
     3.2 防范措施：
     3.2.1 设置 X - Frame - Options 头：在服务器的 HTTP 响应头中设置 X - Frame - Options 头，限制 iframe 是否可以嵌入到页面中。可以设置为 DENY 表示禁止任何网站嵌入，SAMEORIGIN 表示只允许同域名的网站嵌入。
     3.2.2 使用 CSP 的 frame - ancestors 指令：通过设置 CSP 的 frame - ancestors 指令，限制页面可以被嵌入的来源。例如，Content - Security - Policy: frame - ancestors'self' 表示只允许同域名的网站嵌入。

## JS 加解密 [Https 加密原理](https://www.cnblogs.com/terrymin/p/15735083.html)

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
