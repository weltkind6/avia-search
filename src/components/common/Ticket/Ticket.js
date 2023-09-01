import React from 'react';
import styles from './styles.module.css'

const Ticket = ({ data, dataCopy }) => {

    return (
        <div className={styles.wrapper}>
            {dataCopy.map(({currPrice, arrCity, depCity, travelDuration, stops}) => <div>
                <div className={styles.header}>
                    <div>Logo</div>
                    <div>{currPrice}</div>
                </div>
                <div className={styles.direction}>
                    <div>arrival city {arrCity[0]}</div>
                    <div>depart city {depCity[0]}</div>
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
