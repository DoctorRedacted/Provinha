import {Router} from "express"
import {inserir} from "../repository/petRepository.js"

const server = Router();

server.post('/pet/cad', (req, resp) => {
    const {cadastro} = req.body;
    const snd = inserir(cadastro);
    resp.status(204).send();
})

export default server;