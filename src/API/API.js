import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = '2c3efb2d795661188f5f8e1565ebf9ff';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDNkOTdjZWQyZTBkZjYyYzdhYmJjNTc1M2RlNjMxYSIsInN1YiI6IjY0ZjFmYjVmOTdhNGU2MDBjNDg3NTdjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.puc1vDnfiaV3ioqkSALLlCHrh3M3-0ihKl93ZbIhyB0';
 const options  = {
      headers: {
      accept: 'application/json',
      
    }
  };
const params = {
    api_key: API_KEY,
    language: 'en-US',
}

export const  getTrendingList = async () =>{
   
    try{
        const response = await axios.get(`/trending/movie/day`,{options, params });
        console.log(response)
        if (response){
            const data = response.data.results
        console.log(data);
        return data;
        }else{
            throw new Error("Empty response");
        }
       
    }catch (error) {
        console.log(error);
        toast.error('Something went wrong!', {
          icon: '🤯',
        });
        
    }
} 

export const  getSearchingMovies = async ( movieName) =>{
   
    try{
        const response = await axios.get(`/search/movie?query=${movieName}`,{options, params });
        console.log(response)
        if (response){
            const data = response.data.results
        console.log(data);
        return data;
        }else{
            throw new Error("Empty response");
        }
       
    }catch (error) {
        console.log(error);
        toast.error('Something went wrong!', {
          icon: '🤯',
        });
        
    }
} 

export const  getMovieDetails = async (movieId) =>{
   
    try{
        const response = await axios.get(`/movie/${movieId}`,{options, params });
        console.log(response)
        if (response){
            const data = response.data
        console.log(data);
        return data;
        }else{
            throw new Error("Empty response");
        }
       
    }catch (error) {
        console.log(error);
        toast.error('Something went wrong!', {
          icon: '🤯',
        });
        
    }
} 

export const  getCast = async (movieId) =>{
   
    try{
        const response = await axios.get(`/movie/${movieId}/credits`, {options, params });
        console.log(response)
        if (response){
            const data = response.data
        console.log(data);
        return data;
        }else{
            throw new Error("Empty response");
        }
       
    }catch (error) {
        console.log(error);
        toast.error('Something went wrong!', {
          icon: '🤯',
        });
        
    }
} 

export const  getReviews = async (movieId) =>{
   
    try{
        const response = await axios.get(`/movie/${movieId}/reviews`, {options, params });
        console.log(response)
        if (response){
            const data = response.data.results
        console.log(data);
        return data;
        }else{
            throw new Error("Empty response");
        }
       
    }catch (error) {
        console.log(error);
        toast.error('Something went wrong!', {
          icon: '🤯',
        });
        
    }
} 

