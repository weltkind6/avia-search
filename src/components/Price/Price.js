import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {filterByPrice} from "../redux/toolkitSlice";

const Price = () => {
    const dispatch = useDispatch();
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    const handleFilter = () => {
        dispatch(filterByPrice({ priceFrom, priceTo }));
    };

    return (
        <div>
            <div>Цена от:</div>
            <input
                type="number"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
            />
            <input
                type="number"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
            />
            <button onClick={handleFilter}>Фильтр</button>
        </div>
    );
};

export default Price;
