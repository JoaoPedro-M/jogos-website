import Header from "./header/Header";
import Trending from "./sections/Trending";
import New from "./sections/New";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `./js/utilites.js`;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);



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
        <img src="./img/home.png" alt=""></img>
        <div class="home-text">
            <h1>downloads <br/>ILIMITADOS</h1>
            <a href="#" class="btn">seu site numero 1</a>
        </div>
    </section>
    
    {/* Home Section End */}
    


    {/* Trending Section Start */}
    <Trending/>
    {/* Trending Section End */}




    {/* New Section Start */}
    <New/>
    {/* New Section End */}


    {/* Copyright */}

    <div class="copyright container">
        <a href="#" class="logo">Torrent <span>Jogos</span></a>
        <p>&#169; Torrent Jogos All Right Reserved 2024</p>
    </div>

    </div>
  );
}

export default App;
