import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
  },
  login: {
    backgroundColor: "white",
    color: "blue",
    borderRadius: "25px",
  },
  result: {
    marginLeft: "10px",
    color: "white"
  }
}


export default function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate= useNavigate();
  const handleLoginClick = () => {
    navigate("/LoginPage"); 
    if(<LoginPage loginbtn={setIsLoggedIn}/>){
      setIsLoggedIn(true);
    }

  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }
  return (
    <div style={styles.wrapper}>
      <div>
        {isLoggedIn ? (
          <button style={styles.login} onClick={handleLogoutClick}>로그아웃</button>
        ) : (
          <button style={styles.login} onClick={handleLoginClick}>로그인</button>
        )}
      </div>
      <div style={styles.result}>
        {isLoggedIn ? (
          <div>환영합니다!</div>
        ) : (
          <div>로그인 해주세요!</div>
        )}
      </div>
    </div>
  );
}
