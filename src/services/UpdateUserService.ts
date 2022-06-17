import {AppDataSource} from '../data-source';
import { Usuario } from '../entity/Usuario';

interface IUSer{
    id: string;
    nome: string;
    email?: string;
}

class UpdateUserService{
    async execute({id, nome, email}: IUSer){
        const user = await AppDataSource.getRepository(Usuario)
            .createQueryBuilder()
            .update()
            .set({
                nome: nome,
                email: email
            })
            .where("id = :id", { id })
            .execute();
        
        return user.raw;
    }
}

export {UpdateUserService}