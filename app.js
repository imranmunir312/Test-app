const http = require("http");

const index = require("./test/index");

const port = process.env.PORT || 3000;

console.log(`./test/index.js`);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<h1>Hello World ${index}</h1>`);
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});
