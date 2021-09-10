import { useState, useEffect } from 'react';

import { Header, Search, Grid } from '../components';
import './Home.scss';

const Home = (): JSX.Element => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div className={'home_layout'}>
      <Header text={"Manny's GIPHY GIF Searcher"} />
      <Search setSearchResults={setSearchResults} />
      <Grid />
    </div>
  );
};

export default Home;
