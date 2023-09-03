import React, {} from 'react';
import styles from './styles.module.css'

const Companies = ({ dataCopy }) => {
    const executors = dataCopy.map(({executor}) => executor[0])
    const uniqueExecutors = executors.filter((item, index) => executors.indexOf(item) === index)

    return (
        <div className={styles.wrapper}>
            <div>Авиакомпании:</div>
            {uniqueExecutors.map(el =>
                <div key={Math.random() * 1000}>
                    <input type="checkbox"/> - {el}
                </div>)
            }
        </div>
    );
};

export default Companies;
