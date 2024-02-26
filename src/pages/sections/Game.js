import { Link } from 'react-router-dom';


function Game(props) {
    
    let link = "/download/" + props.id;
    return (
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
                <Link to={link} class="box-btn"><i class='bx bx-down-arrow-alt'></i></Link>
            </div>
        </div>
    </div>
)
    
    
}

export default Game;