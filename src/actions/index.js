export const refreshArticles = store => {
  store.setState({loading:true});
  fetch('https://www.reddit.com/top.json?limit=50')
  .then(r=> r.json())
  .then(j=> {
    const newArticles = j.data.children
    .map(article => ({...(article.data || {}), viewed: false}));
    store.setState({ articles: newArticles, loading: false });
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
  store.setState({
    articles: store.state.articles.filter(article => article.id !== articleID),
    dimissed: store.state.dismissed.concat([articleID]),
    viewing: store.state.viewing.id === articleID ? '' : store.state.viewing
  });
};

export const dismissAll = (store) => {
  store.setState({
    articles: [],
    dismissed: store.state.dismissed.concat(store.state.articles.map(article => article.id)),
    viewing: ''
  });
};

export const viewArticle = (store, article) => {
  store.setState({ viewing: article });
};