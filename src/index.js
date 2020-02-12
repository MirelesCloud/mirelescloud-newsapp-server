require('dotenv').config({path: __dirname + '/.env'})
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ArticlesAPI = require('./datasource/articles');

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    articlesAPI: new ArticlesAPI()
  })
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});