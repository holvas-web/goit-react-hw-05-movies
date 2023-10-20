
import { useLocation } from 'react-router-dom';
import {List, Item, Poster, MovieLink, Title} from './MovieCard.sryled';

 const MovieCard  = ({films}) => {
  const location = useLocation();

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <>
      <List>
        {films.map(movie => {
          return (
            <Item key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }} 
              ><Poster src={imgBaseUrl + movie.poster_path}
                    width={140}
                    alt={movie.original_title} />
                    <Title>
                      {movie.original_title}
                    </Title>
              </MovieLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default MovieCard;