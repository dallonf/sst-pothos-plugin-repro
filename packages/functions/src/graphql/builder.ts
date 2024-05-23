import SchemaBuilder from "@pothos/core";

export const builder = new SchemaBuilder({});

builder.queryType({});
builder.mutationType({});

builder.queryField("hello", (t) =>
  t.field({
    type: "String",
    resolve: () => "Hello, world!",
  })
);
