import { AppDataSource } from '../data-source';
import {CreateUserController} from './CreateUserController';
import {Request} from 'express';
import {makeMockResponse} from '../utils/mocks/MockResponse'; 

describe('CreateUserController', ()=>{
    beforeAll(async ()=> {
        // inicializa database de testes e roda migrations
        const dbSource = await AppDataSource.initialize();
        await dbSource.runMigrations()
    })

    afterAll(async () => {
        // deleta entradas do database teste
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    })

    const createUserController = new CreateUserController();
    const response = makeMockResponse()

    it('Deve retornar status 201 quando o usuario for criado', async () => {
        //cria request de mock
        const request = {
            body: {
                nome: 'Algum usuario',
                email: 'email@email.com'
            }
        } as Request

    
        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201);
    })

    it('Deve retornar status 400 quando o nome nao for informado', async () => {
       //cria request de mock
       const request = {
            body: {
                nome: '',
                email: 'email@email.com'
            }
        } as Request


        await createUserController.handle(request, response)

        expect(response.state.status).toBe(400);
    })

    it('Deve retornar status 201 mesmo que o email nao seja informado', async () => {
        //cria request de mock
        const request = {
            body: {
                nome: 'Algum usuario',
                email: ''
            }
        } as Request

    
        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201);
    })
})