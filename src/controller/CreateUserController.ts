import {Request, Response} from 'express';
import { CreateUserService } from '../services/CreateUserService';
import { v4 as uuid } from 'uuid';


class CreateUserController{
    async handle(req: Request, res: Response){
        
        const createUserService = new CreateUserService();

        const {nome, email} = req.body;

        const id = uuid();

        if(nome.length === 0){
            return res.status(400).json({message: "Preencha todos os campos"})
        }

        const user = await createUserService.execute({id, nome, email})
        
        return res.status(201).json(user)
    }
}

export {CreateUserController}