# Azafinance API with Open API Specifications

This project is a REST API with all the endpoints documented built with Node.js and Express.

## Prerequisites
- Node.js 10+
- Yarn or NPM
- MongoDB
- RabbitMQ

## Installation
- Install dependencies
```bash
npm install
```
- Create local environment file
```shell
cp .env.example .env
nano .env
```
- Start Application in development mode 
```bash
npm run dev
```
The application will be live on http://localhost:5000 and you can view the docs on  http://localhost:5000/docs

- Start Application in production mode
```bash
npm run build
```

```bash
npm run start
```

The application will be live on http://localhost:5000 and you can view the docs on  http://localhost:5000/docs


- Live application
The application is currently live on https://aza-finance-api-node.herokuapp.com and you can view the docs on https://aza-finance-api-node.herokuapp.com/docs/