import './Grid.scss';

type GridProps = {
  searchResults: string[];
};

const Grid = ({ searchResults }: GridProps): JSX.Element => {
  const renderGifs = () => {
    return (
      <div className='grid__gifs'>
        {searchResults.map((gifURL) => {
          return (
            <img className='grid__gifs__gif' key={gifURL} src={gifURL} alt='' />
          );
        })}
      </div>
    );
  };

  return <div className={'grid'}>{renderGifs()}</div>;
};

export default Grid;
