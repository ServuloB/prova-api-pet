import { Link } from "react-router-dom";
import { cadastrarPet } from "../../api/petAPI";

export default function index(){

    const [nome, setNome]=[];

    async function salvarClick(){
        try{
        const resposta= await cadastrarPet(nome);
        alert('Pet cadastrado com sucesso');
    }catch(err){
        alert(err.message)
    }
    }

    return (
        <main>
            <p>Cadastre o Pet</p>
            <p>nome</p>
            <input type={'text'} value={nome} onChange={e=> setNome(e.target.value)} ></input>
            <button onClick={salvarClick}>salvar</button>
        </main>
    )
}