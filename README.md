# prime-numbers

implementation of the algorith siege of Eratosthenes, to calculate primes numbers.

is exposed as an api by default in por 3000. If you want to change it create an `.env` file on the
root of the project.

```
# Set to production when deploying to production
NODE_ENV=development

# Node.js server configuration
SERVER_PORT=8080
```

to start the project first do npm install.

then run the following `npm run dev`

on the browser expose the `http://localhost:8080/prime_number/15`

It easy generate primes number of 1.000.000 and above.

The project was made with typescript and used mocha and chai for testting.

## Development

The project use [husky](https://github.com/typicode/husky) and
[lint-staged](https://github.com/okonet/lint-staged) for linting and fixing possible errors on
source code before commit

Git hooks scripts are installed after running `npm install` the first time

### npm run dev

run nodemon to watch all changes, by default get an instance of express on port 3000.

### npm run build

Compile typescript files from the `src` folder inside the `lib` folder

### npm run clean

Remove the following directories/files

- **lib**
- **esm**
- **reports**

### npm test

Run tests files inside the `tests` folder that matches the following patterns. Exit with code > 0 on
error

- **\*.test.ts**
- **\*.spec.ts**

### npm run cover

The same as as `npm test` and generates coverages reports in `reports/coverage`. Exit with code > 0
on error

### npm run lint

Check eslint errors according to `.eslintrc`

### npm run lint:fix

Run `npm run lint` applying fixes and run prettier on every typescript file
