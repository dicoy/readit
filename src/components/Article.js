import react from 'react';
import useGlobal from "../store";
import logo from '../logo.svg';
import { timeAgoFormat } from '../utils';

const Article = () => {
  const [[loading, viewing]] = useGlobal(
    state => [(state.articles.length > 0), state.viewing]
  );
  return (viewing
    ? (<div style={{paddingLeft: '30%', paddingTop: '40px'}}>
        <div className={'flex-row flex-start w-100'}>
          <span className={'fw9 pr2'}>{viewing.author}</span>
          <span>{timeAgoFormat(viewing.created)}</span>
        </div>
        <div className={'flex-column items-center w-100'}>
          <img
          src={
            viewing.thumbnail.startsWith('http')
            ? viewing.thumbnail
            : logo
          } 
          alt={viewing.title}
          title={viewing.title}
          width={(viewing.thumbnail_width || 140)*2}
          height={(viewing.thumbnail_height || 140)*2}
          className={'pa2'}
          />
          <h2 className={'pr3'}>{viewing.title}</h2>
        </div>
        <div className={'flex-row flex-start items-center w-100'}>
          <a
          href={`https://${viewing.permalink}`}
          rel="noopener noreferrer"
          target="_blank" 
          className={'link dim bn bg-transparent ph3 pt1 mb2 dib white'}>
            View full article
          </a>
          <span className={'orange'}>
            { `${viewing.num_comments} comments` }
          </span> 
        </div>
      </div>)
    : !loading ?
    <div className="flex-column w-100 items-center pt6"><h3>Loading...</h3></div>
    :''
  );
}

export default Article;