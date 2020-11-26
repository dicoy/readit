import react from 'react';
import useGlobal from "../store";
import { markAsRead } from '../actions';
import logo from '../logo.svg';
import { timeAgoFormat } from '../utils';

const ArticleList = () => {
  const [articles, [markAsRead, viewArticle]] = useGlobal(
    state => state.articles,
    actions => [actions.markAsRead, actions.viewArticle]
  );
  return (articles.length
  ? articles
    .map((article, i) => (
      <div key={i} className={'dim pointer flex-column white pr3 pt1 w-100'} onClick={
        () => { 
          viewArticle(article);
          markAsRead(article.id);
        }
      }>
        <div className={'flex-row flex-start w-100'}>
          <div className={`br-100 h1 w1 mh2 ${article.read ? '' : 'bg-blue'}`} />
          <span className={'fw9 pr2'}>{article.author}</span>
          <span>{timeAgoFormat(article.created)}</span>
        </div>
        <div className={'flex-row justify-between items-center w-100'}>
          <img
          src={
            article.thumbnail.startsWith('http')
            ? article.thumbnail
            : logo
          } 
          alt={article.title}
          title={article.title}
          width={article.thumbnail_width || 140}
          height={article.thumbnail_height || 140}
          className={'pa2'}
          />
          <span className={'pr3'}>{article.title}</span>
          <span>›</span>
        </div>
        <div className={'flex-row flex-start items-center w-100'}>
          <button className={'link dim bn bg-transparent ph3 pt1 mb2 dib white'}>Ⓧ Dismiss Post</button>
          <span className={'orange'}>
            { `${article.num_comments} comments` }
          </span> 
        </div>
        <hr className={'b--gray pv1 w-90 self-center'} />
      </div>
    ))
  :'Loading...'
  );
}

export default ArticleList;