module.exports = {
  Query: {
    articles: (_, __, { dataSources }) =>  dataSources.articlesAPI.getAllArticles()
  }
}