import { Router } from "express"
import { inserirPet,listarPets } from "../repository/petRepository.js";
const server= Router();

server.post('/pet', async (req,resp)=>{
    try{
    const pet= req.body;
    const final= await inserirPet(pet);
    resp.send(final);
}catch(err)
{
    resp.status(400).send({
        err:err.message
    })
}
});


server.get ('/pet', async (req, resp)=>{
    try{
        const resposta= await listarPets();
        resp.send(resposta);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server