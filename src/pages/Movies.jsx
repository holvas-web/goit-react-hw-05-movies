import { Loader } from "components/Loader/Loader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  getSearchingMovies} from "../API/API";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useState, useEffect, lazy } from "react";
import { useSearchParams } from 'react-router-dom';

const MovieCard = lazy(() => import ("../components/MovieCard/MovieCard")) ;

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
    const [isLoading, setIsLoading] = useState(false);

    const updateQueryString = query => {
      const nextParams = query !== '' && { query };
      setSearchParams(nextParams);
    }; 

    useEffect(() => {
        const loadResult = async () => {
          try {
            setIsLoading(true);
            const movies = await   getSearchingMovies(movieName);
            setSearchResults(movies)
          } catch (error) { 
            toast.error('Movies are not found!');
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        };
    
       loadResult();
      }, [movieName]);

    
      return (
        <div>
          <SearchBar value={movieName} onChange={updateQueryString}/>
          <MovieCard films={searchResults} />
          {isLoading && <Loader />}
        </div>
      );
   
    
}



export default Movies;