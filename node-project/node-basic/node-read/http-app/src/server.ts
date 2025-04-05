import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";

const app = express();

// 中间件机制
// 洋葱模型
// app.use((req, res) => {
//   console.log("🚀 ~ req", req.url, "-", req.baseUrl, "-", req.originalUrl);
//   res.send({
//     name: "express",
//   });
// });
// 啥也不做的中间件
app.use((req, res, next) => {
  // 当做日志来处理
  console.info(
    `[INFO][${new Date().toLocaleString()}] - ${req.method} - ${req.url}`
  );
  next();
});

/**
 * 中间件
 * express 中，如果想要拓展功能，就需要通过中间件来实现
 * 像极了我们之前给大家介绍的插件化机制，插件底座 + 插件协议
 */

/**
 * 如果此时请求体是一个 json 格式的数据，bodyParser.json()
 * 如果你现在的是表单的，urlencoded，bodyParser.urlencoded()
 */
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// 静态资源托管
app.use(express.static("public"));

// 处理跨域
app.use(cors());

// cookie session
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // true，https
    },
  })
);

// 路由处理
// 定义一个 get 请求，让前端可以通过 GET 访问
app.get("/user", (req, res) => {
  // 获取 session
  console.log("🚀 ~ app.get ~ req json/ urlencoded body:", req.body);
  console.log("🚀 ~ app.get ~ req:", req.query);
  res.send("user");
  // postgreSql ✅、mysql、mongodb
});
app.post("/user", (req, res) => {
  res.send("created user");
});
app.put("/user", (req, res) => {
  res.send("updated user");
});
app.delete("/user", (req, res) => {
  res.send("deleted user");
});
// restful 风格
// get，post，put，delete
/**
 * get /user，获取用户列表
 * post /user，创建用户
 * put /user，更新用户
 * delete /user，删除用户
 */
app.get("/user/list", (req, res) => {
  res.send("userList");
});
app.get("/detail", (req, res) => {
  res.send("detail");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});

/**
 * 需要做的一些处理：
 * 1. 路由处理
 * 2. body-parser，麻烦事儿，我们需要通过 contentstream
 * 3. cookie-parser
 * 4. session
 * 5. 异常处理
 * 6. 静态资源处理
 * 7. jwt
 * 8. cors
 */
