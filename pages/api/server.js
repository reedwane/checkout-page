var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    hi: String
  }
  input CheckoutDataInput {
    name: String
    cardNumber: Int
    cvv: Int
  }
  type CheckoutType {
    name: String
    cardNumber: Int
    cvv: Int
  }
  type Mutation {
    setCheckoutData(input: CheckoutDataInput): CheckoutType
    sendMessage(message: String): String
    setMessage(message: String): String
  }
`);

class Checkout {
  constructor({ name, cardNumber, cvv }) {
    this.name = name;
    this.cardNumber = cardNumber;
    this.cvv = cvv;
  }
}

// The root provides a resolver function for each API endpoint
let fakeDatabase = {};
var root = {
  hello: () => {
    return "Hello world!";
  },
  hi: () => {
    return "Hi world!";
  },
  setCheckoutData: ({ input }) => {
    fakeDatabase.ridwan = input;

    return new Checkout(input);
  },
  sendMessage: ({ message }) => {
    let value = message;
    return value;
  },
  setMessage: ({ message }) => {
    fakeDatabase.message = message;
    return fakeDatabase.message;
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
