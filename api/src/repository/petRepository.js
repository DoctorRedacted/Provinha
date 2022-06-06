import {con} from "./connection.js"

export async function inserir(info) {
    const comandos = `INSERT INTO tb_pet (id_pet, nm_pet)
                        VALUES (1, "aroldo")`;
    const [resposta] = comandos.query(comandos, [info.id, info.nome])
    return resposta;
}

export async function showing(info) {
    const comandos = `SELECT id_pet, nm_pet
                      FROM tb_pet`;
    const [resposta] = comandos.query(comandos, [info.id, info.nome])
    return resposta;
}