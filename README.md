# bluelab-mobile

### Server
###### Inicializar projeto
```console
npm init -y
```

###### Instalar pacotes
```console
npm install ts-node -D

npm install typescript -D

npm install express

npm install ts-node-dev -D
```

###### Instalar pacotes Mysql
```console
npm install knex --save

npm install mysql
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

### Mobile
###### Inicializar projeto
```console
expo init mobile
> choose blank (TypeScript)
```

###### Instalar pacotes
```console
npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack

npm install axios
```

###### Executar projeto

```console
npm start
```

 
