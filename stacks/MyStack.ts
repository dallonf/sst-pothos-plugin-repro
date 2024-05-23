import { StackContext, Api, EventBus } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "POST /graphql": {
        type: "graphql",
        function: "packages/functions/src/graphql.handler",
        pothos: {
          schema: "packages/functions/src/graphql/schema.ts",
          output: "packages/functions/src/graphql/schema.graphql",
        },
      },
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
