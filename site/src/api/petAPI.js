import axios from "axios";
const api= axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarPet(nome){
    const resposta = await api.post('/pet',{
    nome: nome
    })
    return resposta.data
}


export async function consultarPet(){
    const resposta = await api.get('/pet')
    return resposta.data
}