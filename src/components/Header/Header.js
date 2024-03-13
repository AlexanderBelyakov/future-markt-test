import './Header.css';
import logo from '../../images/logo.png'

export function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Логотип"/>
        </header>
    )
}