## File .env.development.local

```bash
PORT= 3001

DB_NAME= proyecto-porsche
DB_HOST= localhost
DB_PORT= 5432
DB_USERNAME= (user-name)
DB_PASSWORD= (password-db)
```

## Backend routes

1. GET PRODUCTS
2. GET PRODUCTS {ID}

...bash
# products
http://localhost:3001/products

# products/{id}
http://localhost:3001/products/{id}
...

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

