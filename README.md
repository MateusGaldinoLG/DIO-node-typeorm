# Projeto com Node e TypeORM da DIO

## Descrição

Repositório de estudos do curso de Nodejs com TypeORM e TypeScript.  
Esse repositório possui variação do curso original por utilizar a versão 0.3 do TypeORM.

## Detalhes

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

Para criar Migrations:  
npm run typeorm migration:create src/migration/(nome)  

Para rodar migrations:
npm run typeorm migration:run -- -d src/index.ts