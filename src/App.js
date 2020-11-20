import logo from './logo.svg';
import react, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [ posts, setPosts ] = useState([]);
  useEffect(() => {
    fetch('https://www.reddit.com/top.json?limit=50')
    .then(r=> r.json())
    .then(j=>setPosts(j.data.children.map(r=>r.data.thumbnail)));
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Testing reddit api request
        {
          posts.length
          ? 'No new posts'
          : posts.map(p => <img src={p} />)
        }
      </header>
    </div>
  );
}

export default App;
