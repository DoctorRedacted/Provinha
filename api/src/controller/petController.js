import {Router} from "express"
import {inserir, showing} from "../repository/petRepository.js"

const server = Router();

server.post('/pet', (req, resp) => {
    const cadastro = req.body.cadastro;
    const snd = inserir(cadastro);
    resp.status.send({
        x: snd
    });
})
server.get('/novopet', (req, resp) => {
    const {cadastro} = req.body;
    const snd = inserir(cadastro);
    resp.status.send({
        x: snd
    });
})

export default server;