const express = require("express");
const router = express.Router();
const { buildSchema } = require("graphql");
const graphqlHTTP = require("express-graphql");
const db = require("../db/database");

const schema = buildSchema(`
  type Query {
    hello: String
    dancers:[dancer]
  }

  type dancer{
    id:ID!
    name: String!
    age:String
    weight:String
    height:String
  }
`);

const root = {
  hello: () => "Hello world!",
  dancers: () => {
    return db
      .select("*")
      .from("dancer")
      .then((result) => {
        console.log(result);
        return result;
      });
  },
};

router.get("/test", (req, res) => {
  res.send("test");
});

router.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = router;
