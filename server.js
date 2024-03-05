const http = require("http");
const { exec } = require("child_process");
const fs = require("fs");

const scriptPath = "./getawscred.sh";

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET" && req.url === "/") {
      execScript(res);
    } else {
      res.writeHead(404).end();
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500).end();
  }
});

function execScript(res) {
  if (checkFileExists(scriptPath)) {
    exec(scriptPath, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        res.writeHead(500).end();
      } else {
        console.log(
          { stdout, stderr },
          "\nCredentials sent! You can stop this server (ctrl+c)",
        );
        res.writeHead(200).end(stdout);
      }
    });
  } else {
    console.error("Script file not found.");
    res.writeHead(404).end();
  }
}

function checkFileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

server.listen(3001, "127.0.0.1", () => {
  console.log("Server is running on http://127.0.0.1:3001");
});
