import { AppDataSource } from "../data-source";
import { FakeData } from "../utils/fakeData/fakeData";
import { DeleteUserService } from "./DeleteUserService";

describe("DeleteUserService", () => {
    beforeAll(async () => {
        await AppDataSource.initialize();
        await AppDataSource.runMigrations();
    })

    afterAll(async () => {
        await AppDataSource.query('DELETE FROM usuarios');
        await AppDataSource.destroy();
    })

    const fakeData = new FakeData();

    it('Deve retornar um array vazio quando o usuario for deletado', async() => {
        const mockUser = await fakeData.createUser();

        const deleteUserService = new DeleteUserService();

        const result = await deleteUserService.execute({ id: mockUser.id });

        expect(result).toHaveLength(0);
    })
})