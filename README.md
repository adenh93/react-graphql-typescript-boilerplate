# react-graphql-typescript-boilerplate

## **What is it**

This repository is intended to be used as a boilerplate for any of my projects utilizing a React + Apollo frontend, and a Node/GraphQL backend. Both the frontend and backend projects are bootstrapped with, and take advantage of, Typescript. You are free to use this boilerplate for your own projects if you desire.

## **Prerequisites**

In order to use this boilerplate, you must install `docker` and `docker-compose` on your system.

## **Technology**

### **Backend**

I've configured the GraphQL backend to be scalable, to prevent query and mutation resolvers from becoming overwhelming as more and more types are added the the GraphQL schema.

I haven't added any subscription resolvers in the boilerplate, but if you would like them to also be scalable, consider following the convention I've been using.

In `package.json`, I've included a script named _codegen_, which utilizes `graphql-codegen` to generate Typescript types for your GraphQL Schema, and output them to `backend/src/generated/types.ts` and `frontend/src/types.ts`. This script is automatically executed before the Node server runs, but you can manually execute it via `npm run codegen`

The backend is comprised of the following key technologies:

- **GraphQL-Yoga**: A fully featured GraphQL server, with most useful features available right out of the box, including subscriptions, GraphQL Playground, etc. I've configured the server to support Typescript. [https://github.com/prisma-labs/graphql-yoga](https://github.com/prisma-labs/graphql-yoga)

- **Prisma**: A set of database tools, including an ORM, which is utilized for the GraphQL server. In this boilerplate, I'm using the MongoDB connector, but you can feel free to use any of the other [supported connectors](https://www.prisma.io/features/databases). If you are using a different connector, then you will need to edit `prisma/docker-compose.yml`. [https://github.com/prisma/prisma](https://github.com/prisma/prisma)

### **Frontend**

I've also configured the React frontend project to be scalable, using a components & pages directory structure. I've added some basic container + presentational components to demonstrate the connectivity with the GraphQL server, but feel free to remove them.

The frontend is comprised of the following key technologies:

- **React**: It should go without saying, but React is a powerful library for creating user interfaces. I've configured the project to support Typescript and CSS Modules, via `create-react-app`, but feel free to eject and make any configuration changes of your own. [https://github.com/facebook/react](https://github.com/facebook/react)

- **Apollo-Client**: A fully featured GraphQL client to interface with the backend GraphQL server. I specifically utilize [apollo-boost](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost), which is a quick and easy, out of the box configuration for the Apollo Client. [https://github.com/apollographql/apollo-client](https://github.com/apollographql/apollo-client)

- **React-Apollo**: Provides a Higher Order Component (HOC) to provide the Apollo Client instance to all wrapped components, and allow them to be enhanced with Apollo functionalities. `react-apollo` can essentially replace redux in a way, as it can take full responsibility of fetching and caching data as well as updating the UI, which is why Redux is not included in this boilerplate. If you feel that `react-apollo` is simply not enough to manage your state, then consider the React Context API before needlessly adding Redux boilerplate. [https://github.com/apollographql/react-apollo](https://github.com/apollographql/react-apollo)

## **How to build**

### **Backend**

- Install dependencies via `npm install`.
- Execute `docker-compose up -d` from within `/prisma`.
- Execute `npm run prisma-deploy` to deploy your Prisma schema + generate the prisma client.
- Execute `npm start` to start the server via `nodemon`.

### **Frontend**

- Install dependencies via `npm install`.
- Execute `npm start` to start the Webpack dev server.
