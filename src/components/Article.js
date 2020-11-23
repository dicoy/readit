import react from 'react';
import useGlobal from "../store";
import logo from '../logo.svg';

const Article = () => {
  const [reading] = useGlobal(
    state => state.reading
  );
  return (reading
    ? (<img
      src={
        reading.thumbnail.startsWith('http')
        ? reading.thumbnail
        : logo
      } 
      alt={reading.title}
      title={reading.title}
      width={reading.thumbnail_width || 140}
      height={reading.thumbnail_height || 140}
    />)
    : ''
  );
}

export default Article;