# Layer Metadata Service

A GraphQL API for managing and subscribing to layer metadata (e.g., for CAD or mapping applications) using Apollo Server, Express, and WebSockets.

## Features

- Query, mutate, and subscribe to layer metadata
- Apollo Server 4 with Express integration
- GraphQL subscriptions over WebSocket
- TypeScript-first codebase

## Prerequisites

- Node.js v18 or higher
- npm v8 or higher

## Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/dhananjaygore64/layer-metadata-service-graphql.git
   cd layer-metadata-service
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```

## Running the Server

### Development mode (with auto-reload)

```sh
npm run dev
```

### Accessing the GraphQL Playground

After starting the server, open your browser and navigate to:

- [http://localhost:4000/graphql](http://localhost:4000/graphql)

Apollo Server is configured with the GraphQL Playground plugin, so you can interactively test queries, mutations, and subscriptions from this UI.

### Example Queries

**Query all layers:**

```graphql
query {
  layers {
    id
    name
    visible
    color
    lastModified
  }
}
```

**Toggle layer visibility:**

```graphql
mutation {
  toggleLayerVisibility(id: "1") {
    id
    visible
    lastModified
  }
}
```

**Subscribe to layer visibility changes:**

```graphql
subscription {
  layerVisibilityChanged {
    id
    visible
    lastModified
  }
}
```

## API Endpoints

- **GraphQL HTTP:** [http://localhost:4000/graphql](http://localhost:4000/graphql)
- **GraphQL Subscriptions (WebSocket):** `ws://localhost:4000/subscriptions`

## Project Structure

```
src/
  index.ts        # Entry point
  schema.ts       # GraphQL schema
  resolvers.ts    # GraphQL resolvers
  data.ts         # In-memory data
```

## Design Choices

- **Apollo Server 4**: Chosen for its modern features and support for both HTTP and WebSocket protocols.
- **Express**: Used for middleware flexibility and easy integration with Apollo Server.
- **@as-integrations/express4**: Provides seamless Apollo Server 4 + Express integration.
- **graphql-ws** and **ws**: Used for robust, standards-compliant GraphQL subscriptions.
- **TypeScript**: Ensures type safety and maintainability.
- **In-memory data**: For demo purposes; can be replaced with a database in production.

## Testing

- Use the GraphQL Playground at [http://localhost:4000/graphql](http://localhost:4000/graphql) to run queries, mutations, and subscriptions interactively.
- You can also use tools like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) for HTTP requests, and [GraphQL Playground desktop](https://github.com/graphql/graphql-playground) or [Altair](https://altair.sirmuel.design/) for subscriptions.
