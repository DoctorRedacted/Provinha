import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function cadastrar(nome) {
    const r = await api.post('/pet', {
        nome: nome
    });
    return r.data;
}

export async function consultar() {
    const r = await api.get('/pet');
    return r.data;
}