import react from 'react';

export const refreshArticles = (store) => {
  fetch('https://www.reddit.com/top.json?limit=50')
  .then(r=> r.json())
  .then(j=> store.setState({ articles: j.data.children}));
};