import { useEffect } from 'react';
import useGlobal from "./store";
import {refreshArticles} from './actions';
import Article from './components/Article';
import SideBar from './components/SideBar';
import LinkBar from './components/LinkBar';
import './App.css';

function App() {
  const [articles, refreshArticles] = useGlobal(
    store => store.articles,
    actions => actions.refreshArticles
  );
  useEffect(() => {
    refreshArticles();
  },[refreshArticles]);

  return (
    <div>
      <header className="bg-near-black white tc flex-column align-center justify-center">
        <h2>Readit</h2>
        <h3>Read Reddit's top 50 stories</h3>
      </header>
      <SideBar title={'Reddit Posts'}  />
      <Article />
      <LinkBar pagination={10} />
    </div>
  );
}

export default App;
