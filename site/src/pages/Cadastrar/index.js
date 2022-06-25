import { useState } from "react";
import { cadastrarPet } from "../../api/petAPI";

export default function Index() { 

    const [nome, setNome]= useState('');

    async function salvarClick(){
        try{
        const resposta= await cadastrarPet(nome);
        alert('Pet cadastrado com sucesso');
    }catch(err){
        alert(err.message)
    }
    }

    return (
        <div className="cadastro">
            <p>Cadastre o Pet</p>
            <p>nome</p>
            <input type={'text'} value={nome} onChange={e=> setNome(e.target.value)}/>
            <button onClick={salvarClick}>salvar</button>
        </div>
    );
}