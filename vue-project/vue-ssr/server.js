const express = require("express");
const { createSSRApp } = require("vue");
const { renderToString } = require("@vue/server-renderer");
const fs = require("fs");

const app = express();
app.use(express.static("./dist"));

const template = fs.readFileSync("./src/index.template.html", "utf-8");
console.log("template1==>", template);

app.get("*", async (req, res) => {
  console.log("template2==>", req);
  // const vueApp = createSSRApp({
  //   data: () => ({ url: req.url }),
  //   template: `<div>Current URL: {{ url }}</div>`,
  // });

  // const appHtml = await renderToString(vueApp);
  // console.log("template==>", template, appHtml);
  // const html = template.replace("<!--vue-ssr-outlet-->", appHtml);

  res.send(html);
});

app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});
