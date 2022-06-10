import { Router, Request, Response } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { GetAllUsersController } from "./controller/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.json({mensagem: 'Bem vindo a nossa DIO API'})
})

router.post('/usuarios', createUserController.handle);
router.get('/usuarios', getAllUsersController.handle);

export {router};