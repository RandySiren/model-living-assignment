import './Search.scss';

import { useState } from 'react';

type SearchProps = {
  setSearchResults: React.Dispatch<React.SetStateAction<string[]>>;
};

const Search = ({ setSearchResults }: SearchProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // NOTE: API Keys must be stored locally, for the sake of downloading and running and simplicity we will store it directly
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=jdNWJ6plFGt0nIza8kMG7znyZgVK2lEx&q=${searchQuery}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        const resultArray: string[] = [];
        resp.data.map((data: any) =>
          resultArray.push(data.images.original.url)
        );
        setSearchResults(resultArray);
      });
  };
  return (
    <div className={'search'}>
      <form className={'search__form'} action='/' method='get'>
        <input
          className={'search__form__input'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className={'search__form__button'}
          type='submit'
          onClick={(e) => handleClick(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
