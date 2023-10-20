
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { lazy, useEffect, useState } from "react";
import {getTrendingList} from '../API/API';

const MovieCard = lazy(() => import ('components/MovieCard/MovieCard'));

const Home =  () =>{
    const[trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      
    const fetchMoviesList = async () => {
    try{  
        setIsLoading(true);
        const movies = await getTrendingList(); setTrendingMovies(movies);

    }catch (error){
        console.log(error);
        toast.error('Something went wrong!');
    }finally{
        setIsLoading(false);
    }
    }
    fetchMoviesList();
    }, [])
  
    return ( 
        <main> 
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: " #8d2e28", textAlign: "center", paddingBottom: "30px"}}>TRENDING TODAY</h1>
          <ul>
           {isLoading ? (
          <Loader /> 
        ) : (
          <MovieCard films={trendingMovies} /> 
        )} 
          </ul> 
        </main> 
      ); 
}; 


export default Home;