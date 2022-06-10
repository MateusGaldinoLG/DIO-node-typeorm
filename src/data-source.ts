import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./entity/Usuario"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "mateus",
    password: "mateus123",
    database: process.env.NODE_ENV === 'test'? "dio_teste" : "dio_node_typeorm",
    logging: false,
    entities: [Usuario],
    migrations: ["src/migration/*.ts"]
})
