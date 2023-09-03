import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './styles.module.css'
import {stops} from "../redux/toolkitSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);
    const dataCopy = useSelector(state => state.data)
    console.log('dataCopy', dataCopy)

    const handleWithStops = () => {
        dispatch(stops());
    };

    const handleWithoutStops = () => {
        dispatch(stops());
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
