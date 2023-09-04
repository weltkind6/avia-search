import React, {useState} from 'react';
import styles from './styles.module.css'
import {useDispatch} from "react-redux";
import {filterByCompany} from "../redux/toolkitSlice";

const Companies = ({ dataCopy }) => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);
    const executors = dataCopy.map(({executor}) => executor[0])
    const uniqueExecutors = executors.filter((item, index) => executors.indexOf(item) === index)

    const handleFirstCompany = (el) => {
        dispatch(filterByCompany({ company: el }));
    };

    return (
        <div className={styles.wrapper}>
            <div>Авиакомпании:</div>
            {uniqueExecutors.map(el =>
                <div key={Math.random() * 1000}>
                    <span>{el}</span>
                    <input
                        type="checkbox"
                        name="option"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={() => {
                            setSelectedOption('option1');
                            handleFirstCompany(el);
                        }}
                    />
                </div>)
            }
        </div>
    );
};

export default Companies;
