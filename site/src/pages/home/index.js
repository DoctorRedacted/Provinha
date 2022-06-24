import { useState, useEffect } from "react";
import { cadastrar, consultar } from "../../api/petApi";
import "./index.scss"

export default function Index() {
    const [nome, setNome] = useState('');
    const [info, setInfo] = useState('');

    async function cadastrarPet() {
        try {
        const r = await cadastrar(nome);
        alert('DEU BOM!!!');
        setNome('');
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
    return (
        <main className="base-container">
            <h1 style={{color: '#fff'}}>API PAI DE PET</h1>
            <p  style={{color: '#fff'}}>AUTOR: Nicholas Silva Santos('REAL' FRANK)</p>
            <div className="content-container">
                <input style={{outline: 'none', borderRadius: '.5em'}} placeholder="INSIRA O NOME DO PET" value={nome} onChange={e => setNome(e.target.value)}></input>
                <button style={{backgroundColor: ' rgb(41, 182, 64)'}} onClick={cadastrarPet}>ENVIAR!!!</button>
            </div>
            <div className="forms-container">
            {info.map(item => 
                <ul className="forms-container">
                    <li> ID: #{item.id} NOME:  {item.nome}</li>
                </ul>
            )}
            </div>
        </main>
    )
}    
