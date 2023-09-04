import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {filterByPrice} from "../redux/toolkitSlice";

const Price = () => {
    const dispatch = useDispatch();
    const [price, setPrice] = useState('');

    const handleFilter = () => {
        dispatch(filterByPrice({ price }));
    };

    return (
        <div>
            <div>Цена от:</div>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleFilter}>Фильтр</button>
        </div>
    );
};

export default Price;
