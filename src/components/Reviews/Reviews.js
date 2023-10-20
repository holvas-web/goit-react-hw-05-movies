import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcDisclaimer } from "react-icons/fc";
import { getReviews } from "API/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoRevMessage, RevList, RevSubtitle, RevWrapper, RevItem, RevAuthor, RevContent } from './Reviews.styled';

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try{
                const result = await getReviews(movieId)
                console.log(result);
                setReviews(result);
            } catch (error) { 
                toast.error('Reviews is not found!', {
                        icon: '🤯',
                    });
                console.log(error);
            }
        };
    
        fetchReviews();
    }, [movieId]);
            
        
    return (
        <>
        <RevWrapper>
            <RevSubtitle>Movie Reviews</RevSubtitle>
                <RevList>
                    {reviews.map(review => (
                       <RevItem key={review.id}>
                            <RevAuthor>{review.author}</RevAuthor>
                            <RevContent>{review.content}</RevContent>
                       </RevItem> 
                    ))}
                </RevList>
        </RevWrapper>
        {reviews.length === 0 && (
        <NoRevMessage><FcDisclaimer/> We don't have any reviews for this movie.</NoRevMessage>
      )}
        </>
    )
}

export default Reviews;