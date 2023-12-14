import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <form style={{marginLeft : "200px", marginTop:"50px",fontSize :"25px"}}>
    <h1 style={{marginBottom:"10px"}}>해당 페이지를 찾지 못했습니다.</h1>
    <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
    <div style={{color : "red", cursor :"pointer"}} onClick={()=> navigate('/')}>메인 페이지로 이동</div>
  </form>
  )
}
