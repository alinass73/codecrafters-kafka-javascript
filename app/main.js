import net from "net";

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  connection.write("\0\0\0\x08\0\0\0\x07");
});
//
server.listen(9092, "127.0.0.1");
