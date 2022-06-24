import { useEffect, useState } from "react";
import { consultarPet } from "../../api/petAPI";

export default function Index(){

    const [pet,setPet]= useState([]);

    async function carregarTdPet(){
        const r= await consultarPet();
        setPet(r);
    }

    useEffect(()=>{
        carregarTdPet();
    }, [])

    return (
        <div className="consulta">
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
        </div>
    );
}