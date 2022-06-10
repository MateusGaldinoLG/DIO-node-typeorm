import { AppDataSource } from "../data-source";
import { CreateUserService } from "./CreateUserService";
import {v4 as uuid} from 'uuid';

describe('CreateUserService', () => {
    beforeAll(async () => {
        const dbSource = await AppDataSource.initialize();
        await dbSource.runMigrations();
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    })

    it('deve retornar o id do usuario criado', async () => {
        const createUserService = new CreateUserService();

        const result = await createUserService.execute({
            id: uuid(),
            nome: 'Algum usuario',
            email: 'email@usuario.com'
        })

        expect(result).toHaveProperty('id');
    })
})