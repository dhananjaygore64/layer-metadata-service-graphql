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
   git clone <your-repo-url>
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

## Notes

- Uses `@as-integrations/express4` for Apollo Server 4 + Express integration.
- Uses `graphql-ws` and `ws` for subscriptions.
- TypeScript configuration is set for ES modules and top-level await.

---
