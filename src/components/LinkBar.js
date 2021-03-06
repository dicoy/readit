import react from 'react';
import useGlobal from "../store";
import { markAsRead } from '../actions';
import logo from '../logo.svg';
import { timeAgoFormat } from '../utils';

const LinkBar = ({pagination}) => {
  const [articles, [markAsRead, viewArticle]] = useGlobal(
    state => {
      const start = state.articles.findIndex(a=>a.id===state.viewing.id);
      return state.articles.slice(start, start+pagination).map((a,i)=>({...a,position:i+start}))
    },
    actions => [actions.markAsRead, actions.viewArticle]
  );
  return (articles.length
  ? <div className={'flex-column pl-30-ns'}>
      <h4>Read more articles</h4>
      <div className={'flex-row items-end justify-around flex-wrap'} >{
        articles
        .map((article, i) => (
          <button 
          key={i}
          href={'#'}
          className={'link dim bn bg-transparent ph3 pt1 mb2 dib blue'}
          onClick={e => {
            e.stopPropagation();
            viewArticle(article);
            markAsRead(article.id);
          }}>
            {`#${article.position}`}
          </button>
        ))
      }</div>
    </div>

  :''
  );
}

export default LinkBar;