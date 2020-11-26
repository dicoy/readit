export const refreshArticles = store => {
  store.setState({loading:true});
  fetch('https://www.reddit.com/top.json?limit=50')
  .then(r=> r.json())
  .then(j=> {
    const newArticles = j.data.children
    .map(article => ({...(article.data || {}), viewed: false}));

    store.setState({ articles: newArticles, loading: false });
    localStorage.setItem('articles', JSON.stringify(newArticles));
  });
};

export const markAsRead = (store, articleID) => {
  const newArticles = store.state.articles.map(
    article => article.id === articleID 
    ? {...article, viewed: true}
    : article
  );
  store.setState({
    articles: newArticles
  });
  localStorage.setItem('articles', JSON.stringify(newArticles));
};

export const dismissArticle = (store, articleID) => {
  const newArticles = store.state.articles.filter(article => article.id !== articleID);
  const newDismissed = store.state.dismissed.concat([articleID]);
  store.setState({
    articles: newArticles,
    dimissed: newDismissed,
    viewing: store.state.viewing.id === articleID ? '' : store.state.viewing
  });
  localStorage.setItem('articles', JSON.stringify(newArticles));
  localStorage.setItem('dismissed', JSON.stringify(newDismissed));
};

export const dismissAll = (store) => {
  const newDismissed = store.state.dismissed.concat(store.state.articles.map(article => article.id));
  store.setState({
    articles: [],
    dismissed: newDismissed,
    viewing: ''
  });
  localStorage.setItem('dismissed', JSON.stringify(newDismissed));
};

export const viewArticle = (store, article) => {
  store.setState({ viewing: article });
};