import { Header, Search, Grid } from '../components';
import styles from './Home.module.css';

const Home = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header text={"Manny's Giphy GIF Searcher"} />
      <Search />
      <Grid />
    </div>
  );
};

export default Home;
