import react, { useState }  from 'react';
import useGlobal from "../store";
import ArticleList from './ArticleList';

const SideBar = ({title}) => {
  const [articles, markAsRead] = useGlobal(
    state => state.articles,
    actions => actions.markAsRead
  );
  const [open, setOpen] = useState(true);
  return (
    <div className={`flex-column bg-near-black white ph2 w-25 overflow-y-scroll absolute top-0`}>
      <h4>{title}</h4>
      <ArticleList />
    </div>
  );
}

export default SideBar;