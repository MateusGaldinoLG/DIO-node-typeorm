import { AppDataSource } from "../data-source";
import { FakeData } from "../utils/fakeData/fakeData";
import { makeMockRequest } from "../utils/mocks/MockRequest";
import { makeMockResponse } from "../utils/mocks/MockResponse";
import { DeleteUserController } from "./DeleteUserController";

describe('DeleteUserController', () => {
    beforeAll(async () => {
        await AppDataSource.initialize();
        await AppDataSource.runMigrations();
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    })

    const fakeData = new FakeData();

    it('Deve retornar status 204 quando o usuario for deletado', async() => {
        const mockUser = await fakeData.createUser();

        const request = makeMockRequest({
            params: {
                id: mockUser.id
            }
        });
        const response = makeMockResponse();

        const deleteUserController = new DeleteUserController();

        await deleteUserController.handle(request, response);

        expect(response.state.status).toBe(204);
    })

    it('Deve retornar status 400 quando id nao for informado', async() => {
        const request = makeMockRequest({});
        const response = makeMockResponse();

        const deleteUserController = new DeleteUserController();

        await deleteUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    })
})