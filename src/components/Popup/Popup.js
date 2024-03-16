import './Popup.css'
import { useState } from 'react';
import vector2 from '../../images/Vector2.png'

export function Popup({isOpen, onClose, confirmCallBack}) {

    const [name, setName] =  useState("");
    const [tel, setTel] = useState("");

    function handleInputName(e) {
        setName(e.target.value);
    }

    function handleInputTel(e) {
        setTel(e.target.value);
    }

    function handleConfirmCallBack(e) {
        e.preventDefault();
        confirmCallBack(name, tel)
        setName('')
        setTel('')
    }
    
    return (
        <div className={`popup ${isOpen ? `popup_opened` : `popup_closed`}`}>
            <div className={`popup__overlay ${isOpen ? `popup__overlay_opened` : ``}`}></div>
            <div className="popup__card">
                <button className="popup__close" onClick={onClose}></button>
                <form className="popup__form" onSubmit={handleConfirmCallBack}>
                    <h2 className="popup__header">Закажите обратный звонок</h2>
                    <input 
                    className="popup__input"
                    type='text'
                    required
                    placeholder='ИМЯ'
                    value={name}
                    onChange={handleInputName}
                    />
                    <input 
                    className="popup__input"
                    type='tel'
                    pattern='8{1}[0-9]{10}'
                    title='8xxxxxxxxxx'
                    required
                    placeholder='ТЕЛЕФОН'
                    value={tel}
                    onChange={handleInputTel}
                    />
                    <div className="popup__checkbox-wrapper">
                        <input
                        className="popup__checkbox"
                        type='checkbox'
                        id="checkbox1"
                        required
                        />
                        <label className="popup__checkbox-label" for="checkbox1">Согласен на сохранение и обработку персональных данных</label>
                    </div>
                    <button className="main__button main__button_free">
                        <p className="main__button-text main__button-text_free">Заказать обратный звонок</p>
                        <img className="main__vector main__vector_free" src={vector2} alt="Ссылка"/>
                    </button>
                </form>
            </div>
        </div>
    )
}