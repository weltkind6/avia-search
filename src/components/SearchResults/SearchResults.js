import React from 'react';
import Ticket from "../common/Ticket/Ticket";
import Companies from "../Companies/Companies";
import styles from './styles.module.css'
import Sorting from "../Sorting/Sorting";
import Filter from "../Filter/Filter";
import Price from "../Price/Price";

const SearchResult = ({ dataCopy }) => {

    return (
        <div className={styles.wrapper}>
            <Sorting />
            <Filter />
            <Companies dataCopy={dataCopy}/>
            <Price />
            <Ticket dataCopy={dataCopy}/>
        </div>
    );
};

export default SearchResult;
