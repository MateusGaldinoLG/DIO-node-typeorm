import { Request } from "express";
import { AppDataSource } from "../data-source";
import { FakeData } from "../utils/fakeData/fakeData";
import { makeMockResponse } from "../utils/mocks/MockResponse";
import { UpdateUserController } from "./UpdateUserController";

describe('UpdateUserController', () => {
    beforeAll(async () => {
        await AppDataSource.initialize();
        await AppDataSource.runMigrations();
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    })

    const fakeData = new FakeData();

    it('Deve retornar status 204 quando usuario for editado', async () => {
        const mockUser = await fakeData.createUser();

        const updateUserController = new UpdateUserController();

        const request = {
            body: {
                id: mockUser.id,
                nome: 'Outro nome',
                email: 'email@email.com'
            }
        } as Request;

        const response = makeMockResponse();

        await updateUserController.handle(request, response);

        expect(response.state.status).toBe(204);
    })

    it('Deve retornar status 400 quando o id nao for informado', async () => {
        const updateUserController = new UpdateUserController();

        const request = {
            body: {
                id: '',
                nome: 'Outro nome',
                email: 'email@email.com'
            }
        } as Request;

        const response = makeMockResponse();

        await updateUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    })

    it('Deve retornar status 400 quando o nome nao for informado', async () => {
        const mockUser = await fakeData.createUser();
        const updateUserController = new UpdateUserController();

        const request = {
            body: {
                id: mockUser.id,
                nome: '',
                email: 'email@email.com'
            }
        } as Request;

        const response = makeMockResponse();

        await updateUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    })

    it('Deve retornar 204 mesmo que o email nao seja informado', async () => {
        const mockUser = await fakeData.createUser();

        const updateUserController = new UpdateUserController();

        const request = {
            body: {
                id: mockUser.id,
                nome: 'Outro nome'
            }
        } as Request;

        const response = makeMockResponse();

        await updateUserController.handle(request, response);

        expect(response.state.status).toBe(204);
    })

})