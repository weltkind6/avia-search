import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {filterByPrice} from "../redux/toolkitSlice";
import styles from './styles.module.css'

const Price = () => {
    const dispatch = useDispatch();
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    const handleFilter = () => {
        dispatch(filterByPrice({ priceFrom, priceTo }));
    };

    return (
        <div className={styles.wrapper}>
            <h2>Цена</h2>
            <input
                type="number"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
                placeholder="от"
            />
            <input
                type="number"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
                placeholder="до"
            />
            <button onClick={handleFilter}>Фильтр</button>
        </div>
    );
};

export default Price;
