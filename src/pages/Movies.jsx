import React from 'react'
import Movie from '../components/Movie'
import {movies} from "../API/MovieDummy"
export default function Movies() {
  return (
    <div className="app-container">{
      movies.results.map((item) => {
        return (
          <Movie key={item.id} props={item} />
        )
      })
    }
    </div>
  )
}
