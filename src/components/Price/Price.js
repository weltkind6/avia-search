import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterByPrice} from "../redux/toolkitSlice";

const Price = () => {
    const dispatch = useDispatch();
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    const handleFilter = (from) => {
        dispatch(filterByPrice({ priceFrom: from, priceTo }));
    };

    return (
        <div>
            <div>Цена от:</div>
            <input
                type="text"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
            />
            <div>Цена до:</div>
            <input
                type="text"
                value={priceTo}
                onChange={
                    (e) => setPriceTo(e.target.value)
                }
            />
            <button onClick={handleFilter}>Фильтр</button>
        </div>
    );
};

export default Price;
