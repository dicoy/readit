import react from 'react';
import useGlobal from "../store";
import logo from '../logo.svg';

const Article = () => {
  const [viewing] = useGlobal(
    state => state.viewing
  );
  return (viewing
    ? (<img
      src={
        viewing.thumbnail.startsWith('http')
        ? viewing.thumbnail
        : logo
      } 
      alt={viewing.title}
      title={viewing.title}
      width={viewing.thumbnail_width || 140}
      height={viewing.thumbnail_height || 140}
    />)
    : ''
  );
}

export default Article;