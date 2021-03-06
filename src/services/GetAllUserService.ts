import { AppDataSource } from "../data-source"
import { Usuario } from "../entity/Usuario"

class GetAllUserService{
    async execute(){
        const usuarios = await AppDataSource.getRepository(Usuario)
            .createQueryBuilder('usuarios')
            .select()
            .getMany();
        
        console.log(usuarios);

        return usuarios;
    }
}

export {GetAllUserService}