import { AppDataSource } from "../data-source"
import { FakeData } from "../utils/fakeData/fakeData";
import { makeMockRequest } from "../utils/mocks/MockRequest";
import { makeMockResponse } from "../utils/mocks/MockResponse";
import { GetAllUsersController } from "./GetAllUsersController";

describe('GetAllUsersController', () => {
    beforeAll(async () => {
        await AppDataSource.initialize();
        await AppDataSource.runMigrations();
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    })

    const fakedata = new FakeData();

    it('Deve retornar status 200 quando pegar todos os usuarios', async () => {
        await fakedata.execute();

        const getAllUserController = new GetAllUsersController();

        const request = makeMockRequest({});
        const response = makeMockResponse();

        await getAllUserController.handle(request, response);

        expect(response.state.status).toBe(200);
    })
})