/*
 * @Author: TerryMin
 * @Date: 2025-04-04 10:39:48
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-04 14:20:05
 * @Description: file not
 */
const express = require("express");
const cors=require('cors');
const path = require("path");
const ejs = require("ejs");

const app = express();
const port = 3000;


// app.get("/", (req, res) => {
//   const data = {
//     siteName: "TerryMin",
//     siteUrl: "https://www.bing.com",
//     sex: "boy",
//   };
//   const template = `
//       <a href='<%=siteUrl%>'> <%=siteName%></a>
//       <div class='sex'><%=sex%></div>
//       `;

//   let html = ejs.render(template, data);
//   res.send(html);
// });

app.use(express.static(path.join(__dirname, "../public")));

app.post("/api/data", (req, res) => {
  res.json({ message: "user content" });
});

app.listen(port, () => {
  console.log(`Example app is listening on http://127.0.0.1:${port}`);
});
