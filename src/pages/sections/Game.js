import { Link } from 'react-router-dom';


function Game(props) {
    
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

export default Game;