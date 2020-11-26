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
  console.log(articles);
  return (articles.length
  ? <div style={{paddingLeft:'30%'}} className={'flex-row items-end justify-around'} >{
      articles
      .map((article, i) => (
        <a 
        key={i}
        href={'#'}
        className={'link dim bn bg-transparent ph3 pt1 mb2 dib blue'}
        onClick={() => { 
          viewArticle(article);
          markAsRead(article.id);
        }}>
          {`#${article.position}`}
        </a>
      ))
    }</div>
  :''
  );
}

export default LinkBar;