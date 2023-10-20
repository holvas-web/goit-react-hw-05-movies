import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCast } from "API/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActorName, CastItem, CastList, CastPoster, CastSubtitle, CastWrapper, Character, NoCastMessage } from './Cast.styled';

const Cast = () => {
const {movieId} = useParams();
    const [cast, setCast] = useState({});

    useEffect(()=> {
        const movieCast = async () => {
            try {
                const response = await getCast(movieId);   
                console.log(response);
                setCast(response.cast);
            } catch (error) { 
                toast.error('Request is not found!');
                console.log(error);
            }
        };
    
        movieCast();
    }, [movieId]);

    return (
        <>
           <CastWrapper>
               <CastSubtitle>Movie Cast</CastSubtitle>
               <CastList >
                   {cast.length>0 && cast.map(actor => (
                       <CastItem key={actor.id}>
                           <CastPoster 
                           src={
                               actor.profile_path ?
                               `https://image.tmdb.org/t/p/w300${actor.profile_path}` : `https://placehold.jp/24/cccccc/ffffff/140x210.png?text=There is no photo`}
                           width={140}
                           loading='lazy'
                           alt={actor.original_name}
                           />
                           <ActorName>{actor.name}</ActorName>
                           <Character>Character: {actor.character}</Character>
                       </CastItem>
                   ))}
               </CastList>
           </CastWrapper>
           {cast.length === 0 && <NoCastMessage >We don't have any cast for this movie.</NoCastMessage>}
        </>
    ) 
};


export default Cast;
