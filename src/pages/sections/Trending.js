import data from "../../jogos.json";
import { Link } from "react-router-dom";

function Slide(props) {
    if (props.Eh_destaque === "sim") {
        let link = "/download/" + props.id
        return (
            <div class="swiper-slide">
                <div class="box">
                    <img src={props.Imagem} alt={props.Nome}></img>
                    <div class="box-text">
                        <h2>{props.Nome}</h2>
                        <h3>{props.Tipo}</h3>
                        <div class="rating-download">
                            <div class="rating">
                                <i class='bx bxs-star' ></i>
                                <span>{props.Classificacao}</span>
                            </div>
                            <Link to={link} class="box-btn"><i class='bx bx-down-arrow-alt' ></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

function Trending() {
    return (
    <div> 
        <section class="trending container" id="trending">
        <div class="heading">
            <i class='bx bxs-flame' ></i>
            <h2>Mais Baixados</h2>
        </div>
        {/* Content */}
        <div class="trending-content swiper">
            <div class="swiper-wrapper">
                
                {data.Jogos.map((jogos) => {
                return <Slide key={jogos.id} id={jogos.id} Nome={jogos.Nome} Tipo={jogos.Tipo} Imagem={jogos["Endereco da Imagem"]} Classificacao={jogos.Classificacao} Eh_destaque={jogos["Eh destaque"]}/>
            })}
                
            </div>

        </div>
    </section>
    </div>
  );
}

export default Trending;