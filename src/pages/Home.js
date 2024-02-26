import New from './sections/New';
import Trending from './sections/Trending';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `/js/utilites.js`;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = `/js/swiper-bundle.min.js`;
    document.body.appendChild(script2);
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  });

    return (
    <div> 
        <Trending/>
        <New/>
    </div>
  );
}

export default Home;