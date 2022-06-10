import { AppDataSource } from "./data-source"
import express from 'express';
import { router } from './routes';

AppDataSource.initialize().then(() => {
    console.log("Initializing typeorm and postgres")
}).catch(error => console.log(error))

const server = express();

server.use(express.json())
server.use(router)

server.listen(5000, () => {
    console.log('Servidor on na porta 5000 http://localhost:5000/')
})
