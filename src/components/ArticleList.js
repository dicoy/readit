import react from 'react';
import useGlobal from "../store";
import { markAsRead } from '../actions';
import logo from '../logo.svg';

const ArticleList = () => {
  const [articles, markAsRead] = useGlobal(
    state => state.articles,
    actions => actions.markAsRead
  );
  return (articles.length
  ? articles
    .map((a, i) => {if (i < 5) console.log(a.data); return a;})
    .map((article, i) => <img
      src={
        article.thumbnail.startsWith('http')
        ? article.thumbnail
        : logo
      } 
      key={i} 
      alt={article.title}
      title={article.title}
      width={article.thumbnail_width || 140}
      height={article.thumbnail_height || 140} 
      onClick={() => markAsRead(article.id)}
    />)
  :'Loading...'
  );
}

export default ArticleList;