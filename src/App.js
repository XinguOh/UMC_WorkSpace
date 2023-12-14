import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Celebirity from "./pages/Celebirity";
import Movies from "./pages/Movies";
import Home from "./components/Home";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";
import TVDetail from "./pages/TVDetail"
import TV from "./pages/TV";
import LoginPage from "./pages/LoginPage";
import LoginSuccess from "./pages/LoginSuccess";
function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/tv/:title" element={<TVDetail />} />
          <Route path="/celebrity" element={<Celebirity />} /> 
          <Route path="/loginpage" element={<LoginPage />} /> 
          <Route path="/loginSuccess" element={<LoginSuccess />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
