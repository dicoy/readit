import react from 'react';
import useGlobal from "../store";
import ArticleList from './ArticleList';

const SideBar = () => {
  const [articles, markAsRead] = useGlobal(
    state => state.articles,
    actions => actions.markAsRead
  );
  return (
    <div style={{ display:'flex', flexDirection: 'column'}}>
      <ArticleList />
    </div>
  );
}

export default SideBar;