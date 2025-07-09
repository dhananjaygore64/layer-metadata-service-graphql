import { PubSub } from "graphql-subscriptions";
import { layers } from "./data";

const pubsub = new PubSub();
const LAYER_VISIBILITY_CHANGED = "LAYER_VISIBILITY_CHANGED";

export const resolvers = {
  Query: {
    layers: (_parent: any, args: { visible?: boolean; search?: string }) => {
      let result = layers;
      if (typeof args.visible === "boolean") {
        result = result.filter((layer) => layer.visible === args.visible);
      }
      if (args.search) {
        result = result.filter((layer) =>
          layer.name.toLowerCase().includes(args.search!.toLowerCase())
        );
      }
      return result;
    },
  },
  Mutation: {
    toggleLayerVisibility: (_parent: any, args: { id: string }) => {
      const id = args.id;
      const layer = layers.find((layer) => layer.id === id);
      if (!layer) throw new Error("Layer not found");
      layer.visible = !layer.visible;
      layer.lastModified = new Date();
      pubsub.publish(LAYER_VISIBILITY_CHANGED, {
        layerVisibilityChanged: layer,
      });
      return layer;
    },
  },
  Subscription: {
    layerVisibilityChanged: {
      subscribe: () =>
        (pubsub as any).asyncIterator([LAYER_VISIBILITY_CHANGED]),
    },
  },
};
