import React, {useEffect, useState} from 'react';

const Sorting = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            <div>
                <span>По возрастанию цены</span>
                <input
                    type="checkbox"
                    name="option"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
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
