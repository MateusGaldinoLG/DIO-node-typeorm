import { Router, Request, Response } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { DeleteUserController } from "./controller/DeleteUserController";
import { GetAllUsersController } from "./controller/GetAllUsersController";
import { UpdateUserController } from "./controller/UpdateUserController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.json({mensagem: 'Bem vindo a nossa DIO API'})
})

router.post('/usuarios', createUserController.handle);
router.get('/usuarios', getAllUsersController.handle);
router.patch('/usuario', updateUserController.handle);
router.delete('/usuario/:iod', deleteUserController.handle)

export {router};