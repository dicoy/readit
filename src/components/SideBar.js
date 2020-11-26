import react, { useState }  from 'react';
import useGlobal from "../store";
import ArticleList from './ArticleList';

const SideBar = ({title}) => {
  const [articles, markAsRead] = useGlobal(
    state => state.articles,
    actions => actions.markAsRead
  );
  const [open, setOpen] = useState(false);
  return (
    <div id="sidebar" className={`${open ? 'active' : ''} white`}>
      <div className="toggle-btn" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>  
      <div className="flex-column items-start list overflow-y-scroll">
        <h4 className={'pt4 pb3 self-center'}>{title}</h4>
        <ArticleList />
      </div>
    </div>
  );
}

export default SideBar;