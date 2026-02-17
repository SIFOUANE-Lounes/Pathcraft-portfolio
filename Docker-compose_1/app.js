const http = require("http");

const PORT = process.env.PORT || 8484;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end(
    "Node.js Docker Compose App\n" +
    "PORT=" + process.env.PORT + "\n" +
    "POSTGREL_USER=" + process.env.POSTGREL_USER + "\n" +
    "POSTGREL_PASSWORD=" + process.env.POSTGREL_PASSWORD + "\n"
  );
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
