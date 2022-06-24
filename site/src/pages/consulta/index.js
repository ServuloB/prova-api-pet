import { useEffect } from "react";
import { consultarPet } from "../../api/petAPI";

export default function Index(){

    const [pet,setPet]= [];

    async function carregarTdPet(){
        const r= await consultarPet();
        setPet(r);
    }

    useEffect(()=>{
        carregarTdPet();
    }, [])

    return (
        <main>
            <p> Consultar pet </p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                    </tr>
                </thead>
                <tbody>
                    {pet.map(item=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}