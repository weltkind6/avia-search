import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import styles from './styles.module.css'
import {stops, withoutStops} from "../redux/toolkitSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);


    const handleWithStops = () => {
        dispatch(stops());
    };

    const handleWithoutStops = () => {
        dispatch(withoutStops());
    };

    return (
        <div className={styles.wrapper}>
            <span>Фильтровать</span>
            <div>
                <span>C остановками</span>
                <input
                    type="checkbox"
                    name="option"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={() => {
                        setSelectedOption('option1');
                        handleWithStops();
                    }}
                />
            </div>
            <div>
                <span>Без остановок</span>
                <input
                    type="checkbox"
                    name="option"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={() => {
                        setSelectedOption('option2');
                        handleWithoutStops();
                    }}
                />
            </div>
        </div>
    );
};

export default Filter;
