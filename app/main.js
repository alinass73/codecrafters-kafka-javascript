import net from "net";

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  connection.on("data", (data) => {
        const correlationId = data.readInt32BE(8);

        const responseData = Buffer.from("Simple response");
        const response = createFullResponse(correlationId, responseData);

        connection.write(response);
    });
});
//
server.listen(9092, "127.0.0.1");
