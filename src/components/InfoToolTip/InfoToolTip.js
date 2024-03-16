 import './InfoToolTip.css'
 import logo from '../../images/logo.png'
 import ellipse from '../../images/Ellipse.png'

 export function InfoToolTip({isOpen, onClose}) {
    return (
        <div className={`popup ${isOpen ? `popup_opened` : `popup_closed`}`}>
            <div className={`popup__overlay ${isOpen ? `popup__overlay_opened` : ``}`}></div>
            <div className="popup__card">
                <button className="popup__close" onClick={onClose}></button>
                <h2 className="info__header">Спасибо за заявку</h2>
                <p className="info__text">Я обязательно<br></br> свяжусь с вами<br></br>  в ближайшее время.</p>
                <img className="info__logo" src={logo} alt="Логотип"/>        
            </div>
            <img className="info__ellipse" src={ellipse} alt="Эллипс"/>
        </div>
    )
 }