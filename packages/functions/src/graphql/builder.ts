import SchemaBuilder from "@pothos/core";
import MyPlugin from "./MyPlugin";

export const builder = new SchemaBuilder({
  plugins: [MyPlugin],
});

builder.queryType({});
builder.mutationType({});

builder.queryField("hello", (t) =>
  t.field({
    type: "String",
    resolve: () => "Hello, world!",
  })
);
