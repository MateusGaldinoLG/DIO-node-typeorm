import { AppDataSource } from "../data-source"
import {GetAllUserService} from "./GetAllUserService"
import {CreateUserService} from './CreateUserService'
import {FakeData} from '../utils/fakeData/fakeData'


describe('GetAllUserService', () => {
    beforeAll(async () => {
        await AppDataSource.initialize();
        await AppDataSource.runMigrations();
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios')
        await AppDataSource.destroy();
    })

    const fakeData = new FakeData();

    it('Deve retornar todos os usuarios cadastrados', async() => {   

        await fakeData.execute();

        const expectedResponse = [
            {
                nome: 'Algum usuario',
                email: 'algumusuario@gmail.com'
            },
            {
                nome: 'Outro usuario',
                email: ''
            }
        ]

        const getAllUserService = new GetAllUserService();

        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectedResponse);
    })
})