import data from "../../jogos.json";
import { Link } from "react-router-dom";

function Slide(props) {
    if (props.Eh_destaque === "sim") {
        let link = "/download/" + props.id
        return (
            <div className="swiper-slide">
                <div className="box">
                    <img src={props.Imagem} alt={props.Nome}></img>
                    <div className="box-text">
                        <h2>{props.Nome}</h2>
                        <h3>{props.Tipo}</h3>
                        <div className="rating-download">
                            <div className="rating">
                                <i className='bx bxs-star' ></i>
                                <span>{props.Classificacao}</span>
                            </div>
                            <Link to={link} className="box-btn"><i className='bx bx-down-arrow-alt' ></i></Link>
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
        <section className="trending container" id="trending">
        <div className="heading">
            <i className='bx bxs-flame' ></i>
            <h2>Mais Baixados</h2>
        </div>
        {/* Content */}
        <div className="trending-content swiper">
            <div className="swiper-wrapper">
                
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