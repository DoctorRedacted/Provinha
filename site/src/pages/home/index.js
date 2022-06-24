import { useState, useEffect } from "react";
import { cadastrar, consultar } from "../../api/petApi";

export default function Index() {
    const [nome, setNome] = useState('');
    const [info, setInfo] = useState('');

    async function cadastrarPet() {
        try {
        const r = await cadastrar(nome);
        alert('DEU BOM!!!');
        consultarApi();
        } catch(err) {
            alert(err.message)
        }
    }

    async function consultarApi() {
        const r = await consultar();
        setInfo(r);
        console.log(info);
    }

    useEffect(() => {
        consultarApi();
    })
    console.log(info)
    return(
        <main>
            <div>
                <input placeholder="INSIRA O NOME DO PET" value={nome} onChange={e => setNome(e.target.value)}></input>
                <button onClick={cadastrarPet}>ENVIAR!!!</button>
            </div>
            <div>
                {info.map(item => 
                    <ul>
                        <li>{item.id}</li>
                        <li>{item.nome}</li>
                    </ul>
                )};
            </div>
        </main>
    )
}