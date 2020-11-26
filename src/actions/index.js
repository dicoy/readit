export const refreshArticles = store => {
  fetch('https://www.reddit.com/top.json?limit=50')
  .then(r=> r.json())
  .then(j=> {
    const newArticles = j.data.children
    .map(article => ({...(article.data || {}), viewed: false}));
    store.setState({ articles: newArticles });
  });
};

export const markAsRead = (store, articleID) => {
  store.setState({
    articles: store.state.articles.map(
      article => article.id === articleID 
      ? {...article, viewed: true}
      : article
    )
  });
};

export const dismissArticle = (store, articleID) => {
  console.log(articleID, store.state.articles.filter(article => article.id !== articleID))
  store.setState({
    articles: store.state.articles.filter(article => article.id !== articleID)
  });
};

export const viewArticle = (store, article) => {
  store.setState({ viewing: article });
};