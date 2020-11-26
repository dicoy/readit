import react, { useState, useEffect }  from 'react';
import useGlobal from "../store";
import ArticleList from './ArticleList';

const SideBar = ({title}) => {
  const [articles] = useGlobal(state => state.articles);
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
        <h4 className={'pt4 pb3 self-center'}>{title}</h4>
        <ArticleList />
      </div>
    </div>
  );
}

export default SideBar;