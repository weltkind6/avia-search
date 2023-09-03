import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {priceAscending} from "../redux/toolkitSlice";

const Sorting = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handlePriceAscending = () => {
        dispatch(priceAscending());
    };

    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    console.log(data)

    return (
        <div>
            <div>
                <button onClick={() => dispatch(priceAscending())}>sort</button>
            </div>
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
                   onChange={handleOptionChange}
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
        </div>
);
};

export default Sorting;
