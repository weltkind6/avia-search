import React from 'react';
import Ticket from "../common/Ticket/Ticket";
import Companies from "../Companies/Companies";
import styles from './styles.module.css'
import Sorting from "../Sorting/Sorting";
import Filter from "../Filter/Filter";

const SearchResult = ({ dataCopy }) => {

    return (
        <div className={styles.wrapper}>
            <Sorting />
            <Filter />
            <Companies dataCopy={dataCopy}/>
            <Ticket dataCopy={dataCopy}/>
        </div>
    );
};

export default SearchResult;
