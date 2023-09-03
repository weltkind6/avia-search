import React from 'react';
import Ticket from "../common/Ticket/Ticket";
import Companies from "../Companies/Companies";
import styles from './styles.module.css'
import {useSelector} from "react-redux";

const SearchResult = ({ dataCopy }) => {
    const count = useSelector(state => state.data)
    console.log(count)

    return (
        <div className={styles.wrapper}>
            <Ticket dataCopy={dataCopy}/>
            <Companies dataCopy={dataCopy}/>
        </div>
    );
};

export default SearchResult;
