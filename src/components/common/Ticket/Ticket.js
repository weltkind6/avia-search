import React from 'react';
import styles from './styles.module.css'
import formatToDate from "../../../helpers/heplers";

const Ticket = ({ dataCopy }) => {

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
                <div>
                <div className={styles.header}>
                    <div>Logo</div>
                    <div>{currPrice}</div>
                </div>
                <div className={styles.direction}>
                    <div>arrival city: {arrCity[0]}</div>
                    <div>depart city: {depCity[0]}</div>
                    <div>depart airport uuid: {depAirport[0]}</div>
                    <div>arrival airport uuid: {arrAirport[0]}</div>
                    <div>depart airport name: {depAirportName[0]}</div>
                    <div>arr airport name: {arrAirportName[0]}</div>
                    <div>departureDate: {formatToDate(departureDate[0])}</div>
                    <div>arrivalDate: {formatToDate(arrivalDate[0])}</div>
                    <div>Рейс выполняет: {executor[0]}</div>
                </div>
                <div className={styles.info}>
                    <div>travelDuration {travelDuration[0]}</div>
                    {stops[0] !== 0 ? <div>Пересадок: {stops[0]}</div> : <div>Без пересадок</div>}
                </div>
                <div className={styles.changeButton}>
                    выбрать
                </div>
            </div>)}
        </div>
    );
};

export default Ticket;
