import data from "../../jogos.json";
import { Link } from 'react-router-dom';


function Box(props) {
    if (props.Eh_novo === "sim") {
        let link = "/download/" + props.id;
        return (
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
                    <Link to={link} className="box-btn"><i className='bx bx-down-arrow-alt'></i></Link>
                </div>
            </div>
        </div>
    )
    } 
    
}

function New() {
    return (
    <div> 
        <section className="new container" id="new">
        <div className="heading">
            <i className='bx bx-game' ></i>
            <h2>Novos Jogos</h2>
        </div>
        {/* Content */}
        <div className="new-content">
            {data.Jogos.map((jogos) => {
                return <Box key={jogos.id} id={jogos.id} Nome={jogos.Nome} Tipo={jogos.Tipo} Imagem={jogos["Endereco da Imagem"]} Classificacao={jogos.Classificacao} Eh_novo={jogos["Eh novo"]}/>
            })}
            
        </div>
        <div className="next-page">
            {/*<a href="#">Próxima Página</a>*/}
        </div>
    </section>
    </div>
  );
}

export default New;