var http = require("http");
var fs = require("fs");
var qs = require("querystring");

var server = http.createServer(function (req, res) {
    // parametr res oznacza obiekt odpowiedzi serwera (response)
    // parametr req oznacza obiekt żądania klienta (request)

    switch (req.method) {
        case "GET":
            switch (req.url) {
                case "/":
                    fs.readFile("static/index.html", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/index.html":
                    fs.readFile("static/index.html", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/static/libs/jquery-1.11.3.min.js":
                    fs.readFile("static/libs/jquery-1.11.3.min.js", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'text/javascript' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/static/libs/three.js":
                    fs.readFile("static/libs/three.js", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'text/javascript' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/static/main.js":
                    fs.readFile("static/main.js", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'text/javascript' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/static/js/game.js":
                    fs.readFile("static/js/game.js", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'text/javascript' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/static/js/hangman.js":
                    fs.readFile("static/js/hangman.js", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'text/javascript' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/imgs/grass.jpg":
                    fs.readFile("static/imgs/grass.jpg", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'image/jpg' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/imgs/panda.png":
                    fs.readFile("static/imgs/panda.png", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'image/jpg' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/imgs/rope.jpg":
                    fs.readFile("static/imgs/rope.jpg", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'image/jpg' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/imgs/wood.jpg":
                    fs.readFile("static/imgs/wood.jpg", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'image/jpg' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                case "/static/css.css":
                    fs.readFile("static/css.css", function (error, data) {
                        if (error) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
                            res.end();
                        }

                        else {
                            res.writeHead(200, { 'Content-Type': 'text/css' });
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
            }
                case "POST":
                    servResp(req, res);
           
                    break;
            }
    });



function servResp(req, res) {
    var allData = "";
    req.on("data", function (data) {
        console.log("data: " + data);
        allData += data;
    });

    req.on("end", function (data) {
        var finish = qs.parse(allData);

    });
};

server.listen(3000);
console.log("serwer staruje na porcie 3000 - ten komunikat zobaczysz tylko raz")