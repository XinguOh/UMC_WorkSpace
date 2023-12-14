import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import TVPop from './TVPop';
const TVShow = ({props}) => {
    const [isHovering,setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    
    const navigate = useNavigate();
    const onClickImg = ()=>{
        navigate(`/TV/${props.name}`,
            {state : {props}});
    }
    return (
    <div
        className="tv-frame" 
        onMouseEnter={handleMouseOver} 
        onMouseLeave={handleMouseOut} 
        onClick={onClickImg}> 
            <div className="tv-img">
                <img src={`https://image.tmdb.org/t/p/w300${props.poster_path}`} alt="poster"
                /> 
            </div>
            <div className="movie-description">
                <div className='movie-description-title'>{props.name}</div>
                <div className="movie-rating">{props.vote_average}</div>
            </div>
            {isHovering && <TVPop props={props}  />}              
        </div>
    );   
};    
export default TVShow;