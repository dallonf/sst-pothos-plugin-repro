/// <reference types="./global-types.d.ts" />

import SchemaBuilder, {
  SchemaTypes,
  BasePlugin,
  PothosOutputFieldConfig,
} from "@pothos/core";
import { GraphQLFieldResolver } from "graphql";

const pluginName = "myPlugin" as const;

export default pluginName;

export class MyPlugin<Types extends SchemaTypes> extends BasePlugin<Types> {
  override wrapResolve(
    resolver: GraphQLFieldResolver<unknown, Types["Context"], object>,
    fieldConfig: PothosOutputFieldConfig<Types>
  ): GraphQLFieldResolver<unknown, Types["Context"], object> {
    return resolver;
  }
}

SchemaBuilder.registerPlugin(pluginName, MyPlugin);
