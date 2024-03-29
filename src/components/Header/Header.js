import './Header.css';
import logo from '../../images/logo.png'
import phone from '../../images/phone.png'
import { Navigation } from '../Navigation/Navigation';

export function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип"/>
            <Navigation />
            <address className="header__address">
                <img className="header__address-phone" src={phone} alt="Телефон"/>
                <a className="header__address-link" href="tel:+83451233445">8-345-123-34-45</a>
            </address>
        </header>
    )
}