import { config } from "dotenv";
config();

import fastify from "fastify";

const app = fastify();

console.log(`The server is started on the port: ${process.env.PORT!}`);

app.listen({ port: parseInt(process.env.PORT!) });
