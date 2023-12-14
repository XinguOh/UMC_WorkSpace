import React,{useState} from 'react';
import MoviePop from "./MoviePop";
import {useNavigate} from 'react-router-dom';
const Movie = ({props}) => {
    const [isHovering,setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    
    const navigate = useNavigate();
    const onClickImg = ()=>{
        navigate(`/movie/${props.title}`,
            {state : {props}});
    }
    return (
        <div className="movie-frame" 
        onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} onClick={onClickImg}> 
            <div className="movie-img">
                <img src={`https://image.tmdb.org/t/p/w300${props.poster_path}`} alt="poster"
                />
            </div>
            <div className="movie-description">
                <div className='movie-description-title'>{props.title}</div>
                <div className="movie-rating">{props.vote_average}</div>
            </div>
            {isHovering && <MoviePop props={props}  />}      
        </div>
        
    );
};        
export default Movie;