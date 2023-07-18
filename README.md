# Инструкция:
```
cd client
npm i
cd ..
cd server
npm i
Создать бд на postgresql
Отредактировать строку подключения в db/knexfile.js
npm run migrate
Загрузить данные в бд (cd utils, node insertStartData.js, ctrl + c)

запустить на беке и фронте:
npm start
```

# Фронт:
Sass, MIT, https://www.npmjs.com/package/sass

React-router-dom, MIT, https://www.npmjs.com/package/react-router-dom

Redux Toolkit, MIT, https://www.npmjs.com/package/%40reduxjs/toolkit

Axios, MIT, https://www.npmjs.com/package/axios

Typescript, Apache-2.0, https://www.npmjs.com/package/typescript


# Бек:
Nodejs, https://nodejs.org/en

Express, MIT, https://www.npmjs.com/package/express

Knex, MIT, https://www.npmjs.com/package/knex

# База данных:
PostgreSQL, https://www.postgresql.org/
