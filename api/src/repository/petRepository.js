import { con } from "./connection.js";

export async function inserirPet(PET){
    const comando=
    `
    INSERT INTO tb_pet (NM_PET)
	VALUES(?)
    `;

    const [resposta]= await con.query(comando, [PET.nome]);
    PET.id= resposta.insertId;
    return PET
}

export async function listarPets(){
    const comando=
    `
    SELECT 	ID_PET    id,
			NM_PET    nome
	FROM TB_PET
    `;
    const [linhas]= await con.query(comando,[]);
    return [linhas];
}