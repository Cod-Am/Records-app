const http = require("http");
const gfName=require("./features.js");

console.log(gfName);

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === "/") {
        res.end("<h1>Hello world!</h1>")
    }
    if (req.url === "/about") {
        res.end("<h1>About</h1>")
    }
    if (req.url === "/contact") {
        res.end("<h1>Contact</h1>")
    }

});
server.listen(5000, () => {
    console.log('Server started')
});
