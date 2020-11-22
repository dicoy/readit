import logo from './logo.svg';
import {useState, useEffect} from 'react';
import useGlobalStore from "./store";
import  {refreshArticles} from './actions';
import './App.css';

function App() {
  const [articles, refreshArticles] = useGlobalStore(
    store => store.articles,
    actions => actions.refreshArticles
  );
  useEffect(() => {
    refreshArticles();
  },[refreshArticles]);

  return (
    <div className="ReadIt">
      <header className="App-header">
        <h1>Readit</h1>
        <h2>Read Reddit's top 50 stories and get conviced of hiring me</h2>
      </header>
      {
        articles.length
        ? articles
          .map((a, i) => {if (i < 5) console.log(a.data); return a;})
          .map(({data}, i) => <img
            src={
              data.thumbnail.startsWith('http')
              ? data.thumbnail
              : logo
            } 
            key={i} 
            alt={data.title}
            title={data.title}
            width={data.thumbnail_width || 140}
            height={data.thumbnail_height || 140} 
          />)
        :'Loading...'
      }
    </div>
  );
}

export default App;
