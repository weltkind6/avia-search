import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {priceAscending, priceDescending} from "../redux/toolkitSlice";

const Sorting = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handlePriceAscending = () => {
        dispatch(priceAscending());
    };

    const handlePriceDescending = () => {
        dispatch(priceDescending());
    };

    const dispatch = useDispatch();

    return (
        <>
            <div>
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
                    onChange={handleOptionChange}
                />
            </div>
        </>
);
};

export default Sorting;
