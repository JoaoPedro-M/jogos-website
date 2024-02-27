import Menu from "./Menu";
import { Link } from 'react-router-dom';

function Header() {
    return (
    <div> 
        <header>
        {/* Nav */}
        <div className="nav container">
            {/* Logo */}
            <Link to="/" className="logo">Torrent <span>Jogos</span></Link>
            {/* Nav Icons */}
            <div className="nav-icons">
                <i className='bx bx-bell bx-tada' id="bell-icon"><span></span></i>
                <div className="menu-icon">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
            
            <Menu/>

            {/* Notification */}
            <div className="notification">
                <div className="notification-box">
                    <i className='bx bxs-check-circle' ></i>
                    <p>Servidores ON! Baixe seus jogos favoritos de GRAÇA!</p>
                </div>
                <div className="notification-box box-color">
                    <i className='bx bxs-x-circle' ></i>
                </div>
            </div>

        </div>
    </header>
    </div>
  );
}

export default Header;