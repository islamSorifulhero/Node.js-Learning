import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        const url = req.url;
        const method = req.method;
    }
)

server.listen(5000, () => {
    console.log('Server is running on the port 5000');
})