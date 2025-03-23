import { Articles } from "./models/Articles";


const fetchArticles = document.querySelector<HTMLElement>("#articles");
const articleElement = document.querySelector<HTMLElement>("#article-container");
var articles: Articles[] = [];

fetchArticles?.addEventListener("click", async () => {
    articles = await Articles.fetchArticles();

    if (articleElement) {
        articleElement.innerHTML = articles.map(article => article.displayArticles()).join("");
    }
});
