import { AppDataSource } from "../data-source"
import { Usuario } from "../entity/Usuario"

interface IUsuario {
    id: string,
    nome: string,
    email?: string
}

class CreateUserService{
    async execute({id, nome, email}: IUsuario){
        const user = await AppDataSource.getRepository(Usuario)
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
                {
                    id: id,
                    nome: nome,
                    email: email
                }
            ])
            .execute();

        console.log(user);
        
        return user.identifiers[0];
    }
}

export {CreateUserService}