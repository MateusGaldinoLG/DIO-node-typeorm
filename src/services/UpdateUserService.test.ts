import { UpdateUserService } from "./UpdateUserService";
import {FakeData} from '../utils/fakeData/fakeData'
import { AppDataSource } from "../data-source";

describe('UpdateUserService', () => {
    beforeAll(async () => {
        await AppDataSource.initialize();
        await AppDataSource.runMigrations();
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    })

    const fakeData = new FakeData();

    it('Deve editar o nome do usuario', async () => {
        const mockUser = await fakeData.createUser();

        const updateUserService = new UpdateUserService();

        const result = await updateUserService.execute({
            id: mockUser.id,
            nome: 'Outro usuario'
        });

        expect(result).toHaveLength(0);
    })
})