import React from 'react';
import { useLocation, useParams } from 'react-router-dom';


export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  console.log(title);
  console.log(state);

  return (
    <div className="app-container"> 
      <img src={`https://image.tmdb.org/t/p/w300${state.props.poster_path}`} alt="poster" />
        <div styles={{flexDirection:"column"}}>
        <h1>{state.props.title}</h1>
        <div className='detail'>{state.props.overview}</div>
      </div>
    </div>
  );
}

