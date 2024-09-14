/*
 * @Author: TerryMin
 * @Date: 2022-01-24 13:41:29
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-22 11:05:32
 * @Description: file not
 */
const express = require("express")
const path = require("path");
const ejs=require('ejs');

const app = express()

const port = 3000

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/',(req,res)=>{
//   res.send('Hello World!')
// })

app.get("/", (req, res) => {
	const data = {
		siteName: "TerryMin",
		siteUrl: "https://www.bing.com",
    sex:"boy"
	}
	const template = `
  <a href='<%=siteUrl%>'> <%=siteName%></a>
  <div class='sex'><%=sex%></div>
  `

	let html = ejs.render(template, data)
	res.send(html)
})

app.listen(port, () => {
	console.log(`Example app is listening on http://127.0.0.1:${port}`)
})
