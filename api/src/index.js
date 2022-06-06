import "dotenv/config"
import cors from "cors" 
import express from "express"

server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => console.log(`api na porta ${process.env.PORT}`));