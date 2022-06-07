import {Router} from "express"
import {inserir, showing} from "../repository/petRepository.js"

const server = Router();

server.post('/pet', async (req, resp) => {
    try {
        const get = req.body;
        const snd = await inserir(get); 
        resp.status(201).send({snd});
    } catch (err) {
        resp.status(400).send({erro:err.message});
    }
})

server.get('/pet', async (req, resp) => {
    const snd = await showing();
    resp.send({snd});
})

export default server;