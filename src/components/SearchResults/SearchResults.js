import React from 'react';
import Ticket from "../common/Ticket/Ticket";
import Companies from "../Companies/Companies";
import styles from './styles.module.css'

const SearchResult = ({ dataCopy }) => {

    return (
        <div className={styles.wrapper}>
            <Ticket dataCopy={dataCopy}/>
            <Companies dataCopy={dataCopy}/>
        </div>
    );
};

export default SearchResult;
