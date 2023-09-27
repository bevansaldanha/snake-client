let connection;
let curInterval;
let chatTime;
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    clearInterval(curInterval);
    curInterval = setInterval(() => connection.write("Move: up"), 10);
  }
  if (key === 'a') {
    clearInterval(curInterval);
    curInterval = setInterval(() => connection.write("Move: left"), 10);
  }

  if (key === 's') {
    clearInterval(curInterval);
    curInterval = setInterval(() => connection.write("Move: down"), 10);
  }

  if (key === 'd') {
    clearInterval(curInterval);
    curInterval = setInterval(() => connection.write("Move: right"), 10);
  }

  if (key === 't') {
    connection.write("Say: hs")
  }
};
module.exports = setupInput;