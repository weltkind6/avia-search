import React from 'react';
import styles from './styles.module.css'
import {arrivalTimeHandler, formatToDate, generateRandomTime} from "../../../helpers/heplers";
import {getTime} from "../../../helpers/heplers";

const Ticket = ({ dataCopy }) => {
    const time = generateRandomTime()

    return (
        <div className={styles.wrapper}>
            {dataCopy.map((
                {
                    currPrice,
                    arrCity,
                    depCity,
                    travelDuration,
                    stops,
                    departureDate,
                    arrivalDate,
                    arrAirport,
                    depAirport,
                    arrAirportName,
                    depAirportName,
                    executor,
                }) =>
                <div className={styles.container} key={Math.random() * 1000}>
                <div className={styles.header}>
                    <div className={styles.executor}>{executor[0]}</div>
                    <div>
                        <div className={styles.price}>{currPrice} ₽</div>
                        <div className={styles.description}>Стоимость для одного взрослого пассажира</div>
                    </div>
                </div>
                <div className={styles.direction}>
                    <div>{depCity[0]}-{depAirportName[0]}-{depAirport[0]} =>
                        {arrCity[0]}-{arrAirportName[0]}-{arrAirport[0]}
                        <div>{time}-
                            {formatToDate(departureDate[0])}
                            -{getTime(travelDuration[0])}
                            -{formatToDate(arrivalDate[0])}-{arrivalTimeHandler(time, travelDuration[0])}
                            {stops[0] !== 0 ? <div>Пересадок: {stops[0]}</div> : <div>Без пересадок</div>}
                        </div>
                    </div>
                    <div>Рейс выполняет: {executor[0]}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.changeButton}>Выбрать</div>
                </div>
            </div>)}
        </div>
    );
};

export default Ticket;
