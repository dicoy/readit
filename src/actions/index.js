export const refreshArticles = store => {
  fetch('https://www.reddit.com/top.json?limit=50')
  .then(r=> r.json())
  .then(j=> {
    const newArticles = j.data.children
    .filter(article => !store.state.viewed.includes(article.id))
    .map(article => article.data);

    let newViewed = new Set(store.state.viewed);  
    newViewed = newArticles.forEach(({ id }) => newViewed.delete(id));

    store.setState({ articles: newArticles, viewed: newViewed });
  });
};

export const markAsRead = (store, articleID) => {
  let newViewed = new Set(store.state.viewed);
  newViewed = newViewed.add(articleID);

  const newArticles = store.state.articles
  .filter(article => articleID !== article.id);

  store.setState({ viewed: newViewed, articles: newArticles });
};