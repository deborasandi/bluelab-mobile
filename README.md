# bluelab-mobile

### Server
###### Inicializar projeto
```console
npm init -y
```

###### Instalar dependências
```console
npm install ts-node -D

npm install typescript -D

npm install express

npm install ts-node-dev -D
```

###### Criar arquivo de configuração
```console
npx tsc --init
```

###### Executar projeto

Inserir dentro de package.json > scripts
>"dev": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts" 

```console
npm run dev
```

 
