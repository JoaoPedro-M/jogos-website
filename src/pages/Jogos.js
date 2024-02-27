import { useEffect, useState } from 'react';

import data from "../jogos.json";
import SearchBar from './sections/SearchBar';
import Game from './sections/Game';
import FilterSidebar from './sections/FilterSidebar';


function acharCategorias() {
  let arr = [];
  data.Jogos.map((jogo) => {
    if (!arr.includes(jogo.Tipo)) arr.push(jogo.Tipo);
    return 0;
  })
  return arr;
}


function Jogos() {

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
  const [pagina, setPagina] = useState(1);
  const [jogosSemelhantes, setJogosSemelhantes] = useState(data.Jogos.slice(0, 8));
  const [todosJogos, setTodosJogos] = useState(data.Jogos);
  const [nomeFiltrado, setNomeFiltrado] = useState("");
  const [tipoFiltrado, setTipoFiltrado] = useState("");
  

  useEffect(() => {
    let j = data.Jogos;
    if (tipoFiltrado !== "") {
      j = j.filter(jogo =>
        jogo.Tipo.includes(tipoFiltrado)
      );
    }

    if(nomeFiltrado !== "") {
      j = j.filter(jogo =>
        jogo.Nome.toLowerCase().includes(nomeFiltrado.toLowerCase())
      );
    }
    

    setTodosJogos(j);
     j = j.slice(0, 8);

    setPagina(1);
    setJogosSemelhantes(j);
    
  }, [nomeFiltrado, tipoFiltrado])



  useEffect(() => {
    let j = todosJogos.slice((8*pagina-8), (8*pagina));
    if (j.length === 0) {
      j = todosJogos.slice(0, 8);
      setPagina(1);
    } 
    setJogosSemelhantes(j);
  }, [pagina, todosJogos]);


  return (
    <div> 
        <section className="new container" id="new">
        <div className="heading jogos">
            {/* <i class='bx bx-game' ></i> */}
            <h2>Jogos</h2>
        </div>
        <SearchBar onSearch={(nome) => {setNomeFiltrado(nome)}}/>
        <FilterSidebar onFilterChange={(tipo) => {setTipoFiltrado(tipo)}} categories={acharCategorias()}/>
        {/* Content */}
        <div className="new-content">
            {jogosSemelhantes.map((jogos) => {
                return <Game key={jogos.id} id={jogos.id} Nome={jogos.Nome} Tipo={jogos.Tipo} Imagem={jogos["Endereco da Imagem"]} Classificacao={jogos.Classificacao} Eh_novo={jogos["Eh novo"]}/>
            })}
            
        </div>
        <div className="next-page">
            <button onClick={() => {setPagina(pagina+1)}}>Próxima Página</button>
        </div>
    </section>
    </div>
  );
}

export default Jogos;