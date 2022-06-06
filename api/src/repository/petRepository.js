import { con } from "./connection.js"

export async function inserir(inserir) {
    const comandos = `INSERT INTO tb_pet (nm_pet)
                        VALUES (?)`;
    const [resposta] = con.query(comandos, [inserir]);
    return resposta;
}

export async function showing(info) {
    const comandos = `SELECT id_pet, nm_pet
                      FROM tb_pet`;
    const [resposta] = con.query(comandos);
    return resposta;
}