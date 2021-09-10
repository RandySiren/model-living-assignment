import { Header, Search, Grid } from '../components';
import './Home.scss';

const Home = (): JSX.Element => {
  return (
    <div className={'home_layout'}>
      <Header text={"Manny's GIPHY GIF Searcher"} />
      <Search />
      <Grid />
    </div>
  );
};

export default Home;
