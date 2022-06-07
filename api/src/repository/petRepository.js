import { con } from "./connection.js"

export async function inserir(nomepet) {
    const comandos = `INSERT INTO tb_pet (nm_pet)
                        VALUES (?)`;
    const [resposta] = await con.query(comandos, [nomepet.nome]);
    return resposta;
}

export async function showing() {
    const comandos = `SELECT id_pet       id,
                             nm_pet     nome
                      FROM tb_pet`;
    const [resposta] = await con.query(comandos);
    return resposta;
}