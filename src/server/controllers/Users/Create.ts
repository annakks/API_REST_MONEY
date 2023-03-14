import { Request, Response } from "express";

interface User{
    nome: string;
    email: string;
    senha: string;
}


export const create = ( req: Request<{}, {}, User>, res: Response) =>{

    const data: User = req.body;

    console.log(data);
    
    return res.send('Criado!');

};