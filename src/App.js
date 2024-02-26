import Header from "./header/Header";
import Home from "./pages/Home";

import { Route, Routes, Link } from 'react-router-dom';
import Downloads from "./pages/Downloads";

function App() {

  



  return (
    <div>
      {/* Custom Scroll Bar */}
    <div class="progress">
        <div class="progress-bar" id="scroll-bar"></div>
    </div>

    {/* Header */}
    <Header/>
  
    {/* Home Section Start */}
    
    <section class="home container" id="home">
        <img src="/img/home.png" alt=""></img>
        <div class="home-text">
            <h1>downloads <br/>ILIMITADOS</h1>
            <Link to="/" class="btn">seu site numero 1</Link>
        </div>
    </section>
    
    {/* Home Section End */}
    



    
    <Routes>
      <Route path="/" index Component={Home}/>
      <Route path="/download/:id" Component={Downloads}/>
      {/* <Route path="/new" Component={Downloads}/>
      <Route path="/trending" Component={Downloads}/> */}
    </Routes>
   
    {/* Trending Section Start */}


    {/* Copyright */}

    <div class="copyright container">
        <Link to="/" class="logo">Torrent <span>Jogos</span></Link>
        <p>&#169; Torrent Jogos All Right Reserved 2024</p>
    </div>

    </div>
  );
}

export default App;
