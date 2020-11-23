import { useEffect } from 'react';
import useGlobal from "./store";
import {refreshArticles} from './actions';
import Article from './components/Article';
import SideBar from './components/SideBar';
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
      <header className="App-header">
        <h2>Readit</h2>
        <h3>Read Reddit's top 50 stories and get conviced of hiring me</h3>
      </header>
      <SideBar />
      <Article />
    </div>
  );
}

export default App;
