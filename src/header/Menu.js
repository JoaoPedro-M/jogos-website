import {Link} from 'react-router-dom';

function Menu() {
    return (
    <div> 
        {/* Menu */}
        <div class="menu">
            <img src="/img/menu.png" alt="CyberPunk"></img>
            <div class="navbar">
                
                <li><Link to="/">Início</Link></li>
                <li><Link to="/jogos">Jogos</Link></li>
                {/* <li><Link to="/trending">Mais Baixados</Link></li>
                <li><Link to="/new">Novos Jogos</Link></li> */}
               
            </div>
        </div>
    </div>
  );
}

export default Menu;