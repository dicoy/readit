import react from 'react';
import useGlobal from "../store";
import logo from '../logo.svg';
import { timeAgoFormat } from '../utils';

const Article = () => {
  const [[loading, articlesAvailable, viewing], refreshArticles] = useGlobal(
    state => [state.loading, (state.articles.length > 0), state.viewing],
    actions => actions.refreshArticles
  );
  return (viewing
    ? (<div className={'pl-30-ns'} style={{color: 'black', paddingTop: '40px', paddingBottom:'40px'}}>
        <div className={'flex-row justify-around justify-start-ns w-100'}>
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
        <div className={'flex-row justify-around justify-start-ns w-100'}>
          <a
          href={`https://reddit.com${viewing.permalink}`}
          rel="noopener noreferrer"
          target="_blank" 
          className={'link dim bn bg-transparent ph3 pt1 mb2 dib blue'}>
            View full article
          </a>
          <span className={'orange'}>
            { `${viewing.num_comments} comments` }
          </span> 
        </div>
      </div>)
    : loading ? <div className="flex-column w-100 items-center pt6">
      <h3>Loading...</h3>
    </div>
    : articlesAvailable ? '' 
    : <div className="flex-column w-100 items-center pt6">
      <h3>No new articles</h3>
      <button
      className="link dim ba bw2 br3 b--black bg-transparent self-center mt3 ph3 pv2 dib"
      onClick={() => refreshArticles()}>
        Refresh Articles
      </button>
    </div>
  );
}

export default Article;