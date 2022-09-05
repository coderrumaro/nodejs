const io = require("socket.io")(100, {
  cors: {
    origin: "http://localhost:1234",
    methord:"get"
  },
});
io.on("connection", (Socket) => {
  Socket.on("message", (data) => {
    Socket.emit("fromserver",`hello client ${data}`)
  });
});
