"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var express_session_1 = __importDefault(require("express-session"));
var app = (0, express_1.default)();
// 中间件机制
// 洋葱模型
// app.use((req, res) => {
//   console.log("🚀 ~ req", req.url, "-", req.baseUrl, "-", req.originalUrl);
//   res.send({
//     name: "express",
//   });
// });
// 啥也不做的中间件
app.use(function (req, res, next) {
    // 当做日志来处理
    console.info("[INFO][".concat(new Date().toLocaleString(), "] - ").concat(req.method, " - ").concat(req.url));
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
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// 静态资源托管
app.use(express_1.default.static("public"));
// 处理跨域
app.use((0, cors_1.default)());
// cookie session
app.use((0, express_session_1.default)({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // true，https
    },
}));
// 路由处理
// 定义一个 get 请求，让前端可以通过 GET 访问
app.get("/user", function (req, res) {
    // 获取 session
    console.log("🚀 ~ app.get ~ req json/ urlencoded body:", req.body);
    console.log("🚀 ~ app.get ~ req:", req.query);
    res.send("user");
    // postgreSql ✅、mysql、mongodb
});
app.post("/user", function (req, res) {
    res.send("created user");
});
app.put("/user", function (req, res) {
    res.send("updated user");
});
app.delete("/user", function (req, res) {
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
app.get("/user/list", function (req, res) {
    res.send("userList");
});
app.get("/detail", function (req, res) {
    res.send("detail");
});
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.listen(3000, function () {
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
