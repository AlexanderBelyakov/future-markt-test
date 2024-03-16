import './Main.css'
import mentor from '../../images/mentor.png'
import vector from '../../images/Vector.png'
import vector2 from '../../images/Vector2.png'
import { convertDate} from '../../utils/utils'
import { useState } from 'react'
import { useEffect } from 'react'

export function Main({onCallbackClick}) {
    const [techniqueNumber, setTechniqueNumber] = useState()
    const [productionIncrease, setProductionIncrease] = useState()

    useEffect(() => { // здесь получаем значения для чисел внизу
        setTechniqueNumber(convertDate()) // код этой операции вынесен в utils.js

        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then(response => response.json())
        .then (data => {
            setProductionIncrease(Math.round(data.Valute.GBP.Value));
        });
        
    }, [techniqueNumber, productionIncrease])

    return (
        <main className="main">
            <div className="main__wrapper">
                <h1 className="main__header">Создаю условия для вашего успеха</h1>
                <p className="main__text">Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий</p>
                <div className="main__buttons">
                    <button className="main__button">
                        <p className="main__button-text">Записаться на консультацию</p>
                        <img className="main__vector" src={vector} alt="Ссылка"/>
                    </button>
                    <button className="main__button main__button_free" onClick={onCallbackClick}>
                        <p className="main__button-text main__button-text_free">Бесплатная консультация</p>
                        <img className="main__vector main__vector_free" src={vector2} alt="Ссылка"/>
                    </button>
                </div>
                <div className="main__info">
                    <div className="main__info-chunk">
                        <p className="main__info-number">{techniqueNumber}+</p>
                        <p className="main__info-text">техник для достижения целей</p>
                    </div>
                    <div className="main__info-chunk">
                        <p className="main__info-number">{productionIncrease}%</p>
                        <p className="main__info-text">увеличение личной продуктивности</p>
                    </div>
                </div>
            </div>  
            <div className="main__pictures">
                <img className="main__mentor" src={mentor} alt="Алекс Шевцов"/>
            </div>
        </main>
    )
}