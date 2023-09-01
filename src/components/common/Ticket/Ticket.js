import React from 'react';
import styles from './styles.module.css'

const Ticket = ({data}) => {
    console.log('data', data)
    return (
        <div className={styles.wrapper}>
            {data.map(({amount, currencyCode}) => <div>
                <div className={styles.header}>
                    <div>Logo</div>
                    <div>{amount} {currencyCode}</div>
                </div>
                <div className={styles.direction}>
                    direction
                </div>
                <div className={styles.info}>
                    info
                </div>
                <div className={styles.changeButton}>
                    выбрать
                </div>
            </div>)}
        </div>
    );
};

export default Ticket;
