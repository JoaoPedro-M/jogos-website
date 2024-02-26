import Menu from "./Menu";
import { Link } from 'react-router-dom';

function Header() {
    return (
    <div> 
        <header>
        {/* Nav */}
        <div class="nav container">
            {/* Logo */}
            <Link to="/" class="logo">Torrent <span>Jogos</span></Link>
            {/* Nav Icons */}
            <div class="nav-icons">
                <i class='bx bx-bell bx-tada' id="bell-icon"><span></span></i>
                <div class="menu-icon">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </div>
            
            <Menu/>

            {/* Notification */}
            <div class="notification">
                <div class="notification-box">
                    <i class='bx bxs-check-circle' ></i>
                    <p>Servidores ON! Baixe seus jogos favoritos de GRAÇA!</p>
                </div>
                <div class="notification-box box-color">
                    <i class='bx bxs-x-circle' ></i>
                </div>
            </div>

        </div>
    </header>
    </div>
  );
}

export default Header;