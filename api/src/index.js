import express from "express"
import petController from "./controller/petController.js"
import cors from "cors"
import "dotenv/config"

const server= express();
server.use(cors());
server.use(express.json());

server.use(petController);

server.listen (process.env.PORT,()=>console.log(`Api online na porta ${process.env.PORT}`))

export default server