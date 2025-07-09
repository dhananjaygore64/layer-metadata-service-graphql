// --- src/schema.ts ---
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar DateTime

  type Layer {
    id: ID!
    name: String!
    visible: Boolean!
    color: String
    lastModified: DateTime
  }

  type Query {
    layers(visible: Boolean, search: String): [Layer!]!
  }

  type Mutation {
    toggleLayerVisibility(id: ID!): Layer
  }

  type Subscription {
    layerVisibilityChanged: Layer
  }
`;
