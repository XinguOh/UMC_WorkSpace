import React from 'react';
import { Link } from 'react-router-dom';
import LoginControl from "./LoginControl";
const styles = {
  wrapper:{
    marginLeft : 0,
    display : "flex",
    backgroundColor : "rgb(4,36,66)",
    alignItems : "center",
    height : "50px",
    
  },
  logo : {
    marginLeft : "200px",
    width: "154px", 
    height: "20px,"
  },
  link:{
    marginLeft : "20px",
    color : "white",
    textDecoration : "none"
  }
}
class Header extends React.Component{
  render(){
  return (
    <div style={styles.wrapper}>
    <Link to="/">
        <img
		    style={styles.logo}
		    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		    alt="로고"
        
        />
        </Link>
        <Link to="/movie" style={styles.link}>영화</Link>
        <Link to="/TV" style={styles.link}>TV프로그램</Link>
        <Link to="/celebrity" style={styles.link}>인물</Link>
        <LoginControl/>
    </div>
  )}
}

export default Header;

/*
export default function Header() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }
  return (
    <div style={styles.wrapper}>
    <Link to="/">
        <img
		    style={styles.logo}
		    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		    alt="로고"
        
        />
        </Link>
        <Link to="/movie" style={styles.link}>영화</Link>
        <Link to="/TV" style={styles.link}>TV프로그램</Link>
        <Link to="/celebrity" style={styles.link}>인물</Link>
        <LoginControl isLoggedIn={isLoggedIn}
        handleLoginClick={handleLoginClick}
        handleLogoutClick={handleLogoutClick}/>
    </div>
  )
}*/
