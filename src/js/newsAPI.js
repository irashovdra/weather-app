// // 6ebc2e87c7f04e7fa1d0b50aca2f9187

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("6ebc2e87c7f04e7fa1d0b50aca2f9187");
// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2
//   .topHeadlines({
//     sources: "bbc-news,the-verge",
//     q: "bitcoin",
//     category: "business",
//     language: "en",
//     country: "us",
//   })
//   .then((response) => {
//     console.log(response);
//     /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
//   });
// // To query /v2/everything
// // You must include at least one q, source, or domain
// newsapi.v2
//   .everything({
//     q: "bitcoin",
//     sources: "bbc-news,the-verge",
//     domains: "bbc.co.uk, techcrunch.com",
//     from: "2017-12-01",
//     to: "2017-12-12",
//     language: "en",
//     sortBy: "relevancy",
//     page: 2,
//   })
//   .then((response) => {
//     console.log(response);
//     /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
//   });
// // To query sources
// // All options are optional
// newsapi.v2
//   .sources({
//     category: "technology",
//     language: "en",
//     country: "us",
//   })
//   .then((response) => {
//     console.log(response);
//     /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
//   });

const keyWordInput = document.querySelector(".key-word__input");

const newsAPI = fetch(
  "https://newsapi.org/v2/everything?q=keyword&apiKey=6ebc2e87c7f04e7fa1d0b50aca2f9187"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const findArticle = (article) => {
if (article.name === keyWordInput.value)
}