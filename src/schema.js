const { gql } = require('apollo-server');

const typeDefs = gql`
  type Articles {
    source: Source
    title: String
    description: String
    urlToImage: String
    content: String
  }

  type Source {
    id: String
    name: String
  }

  type Query {
    articles: [Articles]
  }

`

module.exports = typeDefs;