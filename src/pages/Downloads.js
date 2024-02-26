import { useParams} from 'react-router-dom';
import data from "../jogos.json";

function Screenshot({ filtrados }) {
  if (String(filtrados['Screenshot 1']) === '' || String(filtrados['Screenshot 2']) === '' || String(filtrados['Screenshot 3']) === '') {
    console.log(filtrados['Screenshot 1'])
    return (
      <div></div>
    )
  } else {
    return (
      <div class="screenshots container">
      <h2>Imagens do Jogo</h2>
      <div class="screenshots-content">
        <img src={filtrados['Screenshot 1']} alt={ filtrados.Nome } />
        <img src={filtrados['Screenshot 2']} alt={ filtrados.Nome } />
        <img src={filtrados['Screenshot 3']} alt={ filtrados.Nome } />
      </div>
    </div>
    )
  }
}


function Downloads() {


  let par = useParams();
  let filtrados = data.Jogos.filter(function(jogo) {
    if (jogo.id === Number(par.id)) {
      return jogo;
    } return null;
  })[0]
    return (
      <div> 
        <div class="video-container container">
          <iframe width="1080" height="520" src="https://www.youtube.com/embed/QXeoxQ9WBc4?si=RPIEVYAu7eM0NbRh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        {/*  About  */}
        <div class="about container">
          <h2>{filtrados.Nome}</h2>
          <p>{filtrados.Descricao}
          </p>
        </div>
        {/* ScreenShots */}
        <Screenshot filtrados={filtrados}/>
        
        {/* Download */} 
        <div class="download">
          <h2>Download Torrent</h2>
          <div class="download-links">
              <a href={ filtrados['Link para Download']} download="jogo_torrent">Torrent</a>
          </div>
        </div>

      </div>
  );
}

export default Downloads;