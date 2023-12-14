import React from 'react'
import { tv } from '../API/tvDummy'
import TVShow from '../components/TVShow'

export default function TV() {
  return (
    <div className="app-container">{
      tv.results.map((item) => {
        return (
          <TVShow key={item.id} props={item} />
        )
      })
    }
    </div>
  )
}
