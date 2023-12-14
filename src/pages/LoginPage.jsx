import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

export default function LoginPage({onLogin}) {
  const [loginbtn,setLoginbtn]=useState(false);
  const [emailValid,setEmailValid]=useState(true);
  const [userEmail, setUserEmail]=useState('');
  const [userPw,setUserPw]=useState('');
  
  const navigate= useNavigate();

  const handleChangeEmail=(e)=> {
    const inputEmail = e.target.value;
    setUserEmail(inputEmail);
    setEmailValid(validatEmail(inputEmail));
    setLoginbtn(validatEmail(inputEmail) && validatPw(userPw));
  }
  

  const handleChangePw=(e)=> {
    const inputPw = e.target.value;
    setUserPw(inputPw);
    setLoginbtn(validatEmail(userEmail) && validatPw(inputPw));
  }
  const validatPw = (e) => {
    const pwtest = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$!%*?&]).*$/;
    return pwtest.test(e);
  }
  const validatEmail = (e) => {
    const emailtest= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailtest.test(e);
  }
  
  const handleSubmit=(e)=> {
    e.preventDefault();  
    navigate("/LoginSuccess")
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
        <h1>이메일과 비밀번호를 입력해주세요</h1>
        <label 
            htmlFor='useremail'
            style={{marginTop:"100px"}}>이메일 주소</label>
        <br />
        <input 
            type='email'
            className='box'
            value={userEmail}
            placeholder='이메일을 입력해주세요'
            onChange={handleChangeEmail}/>
        <br />
        {!emailValid &&(<p style={{color:'red'}}>올바른 이메일을 입력해주세요</p>)}
        <label 
          htmlFor='password'
          style={{marginTop:"100px"}}>
            비밀번호</label>
        <br />
        <input 
            type='password'
            className='box'
            value={userPw}
            placeholder='영문, 숫자, 특수문자 포함 8자 이상'
            onChange={handleChangePw}/>
        <br />
        <button 
          type='submit' 
          style={{backgroundColor: !loginbtn? 'gray': 'navy',cursor:loginbtn?'pointer':''}} 
          className="loginbutton" 
          disabled={!loginbtn}>확인</button>
    </form>
  );
}

