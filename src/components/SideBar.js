import react, { useState, useEffect }  from 'react';
import useGlobal from "../store";
import ArticleList from './ArticleList';

const SideBar = ({title}) => {
  const [articles, dismissAll] = useGlobal(
    state => state.articles,
    actions => actions.dismissAll
  );
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(articles.length > 0),[articles]);
  return (
    <div id="sidebar" className={`${open ? '' : 'active'} white`}>
      <div className="toggle-btn" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>  
      <div className="flex-column items-start list overflow-y-hidden h-100">
        <h4 className={'pt4 pb3 self-center sticky-top'}>{title}</h4>
        <ArticleList />
        <button 
        onClick={() => dismissAll()}
        className={'link dim bn bg-transparent self-center pt3 mb2 dib orange sticky-bottom'}>
          Dismiss All
        </button> 
      </div>
    </div>
  );
}

export default SideBar;