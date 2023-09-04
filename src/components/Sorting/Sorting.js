import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {priceAscending, priceDescending, travelDuration} from "../redux/toolkitSlice";

const Sorting = () => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);

    const handlePriceAscending = () => {
        dispatch(priceAscending());
    };

    const handlePriceDescending = () => {
        dispatch(priceDescending());
    };

    const handleTravelDuration = () => {
        dispatch(travelDuration());
    };

    return (
        <>
            <div>
                <h2>Сортировать</h2>
                <span>По возрастанию цены</span>
                <input
                    type="checkbox"
                    name="option"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={() => {
                        setSelectedOption('option1');
                        handlePriceAscending();
                    }}
                />
            </div>
           <div>
               <span>По убыванию цены</span>
               <input
                   type="checkbox"
                   name="option"
                   value="option2"
                   checked={selectedOption === 'option2'}
                   onChange={() => {
                       setSelectedOption('option2');
                       handlePriceDescending();
                   }}
               />
           </div>
            <div>
                <span>По времени в пути</span>
                <input
                    type="checkbox"
                    name="option"
                    value="option3"
                    checked={selectedOption === 'option3'}
                    onChange={() => {
                        setSelectedOption('option3');
                        handleTravelDuration();
                    }}
                />
            </div>
        </>
);
};

export default Sorting;
