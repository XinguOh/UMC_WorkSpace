import React from 'react'
export default function Ad(props) {
  if(!props.Ad){
    return null;
  }
  return (
    <div>
      <img src={require("../pics/Umc Logo.svg").default} 
      alt="Ad" width={"100%"}/>
    </div>
  )
}
