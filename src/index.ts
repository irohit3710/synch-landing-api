import { Server } from "./server";
import http from "http";
import { normalizePort, onError } from "./serverHandler";


const SERVER = new Server();

const PORT =   normalizePort(process.env.PORT || 3000);

SERVER.app.set("post", PORT);

let server = http.createServer(SERVER.app);

server.listen(PORT);

// server handler
server.on("error", error => onError(error, PORT));

server.on("listening", () => {
    const addr: any = server.address();
    const bind: string = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;

    console.log(`Listening on ${bind}`);    
});