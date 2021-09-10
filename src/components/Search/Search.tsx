import './Search.scss';

import { useState } from 'react';

// type SearchProps = {};

const Search = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>();
  return (
    <div className={'search'}>
      <form className={'search__form'} action='/' method='get'>
        <input
          className={'search__form__input'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={'search__form__button'} type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
