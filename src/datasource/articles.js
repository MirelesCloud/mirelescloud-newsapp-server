require('dotenv').config();

const { RESTDataSource } = require('apollo-datasource-rest');
const API_KEY = process.env['NEWSAPI_API_KEY'];

class ArticlesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://newsapi.org/v2/"
  }

  async getAllArticles() {
    try {
      const response = await this.get(`top-headlines?country=us&apiKey=${API_KEY}`);
      return Array.isArray(response.articles) ? response.articles.map(article => this.articleReducer(article)) : [];
    } catch (error) { throw error }
   
  }

  articleReducer(article) {
    return {
      id: article.title,
      title: article.title,
      description: article.description,
      urlToImage: article.urlToImage,
      content: article.content,
      source: {
        id: article.source.id,
        name: article.source.name
      }
    }
  }

  
}

module.exports = ArticlesAPI;