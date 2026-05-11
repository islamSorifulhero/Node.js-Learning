import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        console.log(req);
    }
)

server.listen(5000, () => {
    console.log('Server is running on the port 5000');
})