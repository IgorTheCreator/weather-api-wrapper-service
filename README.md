# Weather API Wrapper Service (Fastify/JS)

Weather API Wrapper Service inspired by https://roadmap.sh/backend/project-ideas#3-weather-api-wrapper-service

## Стэк

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![Fastify](https://img.shields.io/badge/fastify-202020?style=for-the-badge&logo=fastify&logoColor=white)

![Redis](https://img.shields.io/badge/redis-CC0000.svg?&style=for-the-badge&logo=redis&logoColor=white)

## Как запустить приложение

- Установите зависимости

```
npm install
```

- Создайте файл .env. Пример можно найти в .env.sample. В качестве API для погоды используется [Visual Crossing’s API](https://www.visualcrossing.com/weather-api)

- Запустите контейнер Redis

```
npm run redis:start
```

- Запуск приложения

```
npm run dev
```
