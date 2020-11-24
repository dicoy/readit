import react from 'react';
import useGlobal from "../store";
import { markAsRead } from '../actions';
import logo from '../logo.svg';
import { timeAgoFormat } from '../utils';

const ArticleList = () => {
  const [articles, markAsRead] = useGlobal(
    state => state.articles,
    actions => actions.markAsRead
  );
  return (articles.length
  ? articles
    .map((article, i) => (
      <div className={'flex-column white'} onClick={() => markAsRead(article.id)}>
        <div className={'flex-row justify-between items-center w-100'}>
          <div className={`br-100 h1 w1 ${article.read ? '' : 'bg-blue'}`} />
          <span>{article.author}</span>
          <span>{timeAgoFormat(article.created)}</span>
        </div>
        <div className={'flex-row justify-between items-center w-100'}>
          <img
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
          />
          <span>{article.title}</span>
          <span>></span>
        </div>
        <div className={'flex-row justify-between items-center w-100'}>
          <button className={'link dim ph3 pv2 mb2 dib'}>Dismiss</button>
          <span className={'orange'}>
            { `${article.num_comments} comments` }
          </span> 
        </div>
        <hr className={'b--gray pt1 w-90'} />
      </div>
    ))
  :'Loading...'
  );
}

export default ArticleList;