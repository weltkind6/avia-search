import {configureStore, createSlice} from '@reduxjs/toolkit';
import data from "../../mock/flights.json";

const mockData = data.results.flights.map(({flight}) => flight)

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        data: mockData,
    },
    reducers: {
        increment: state => {state.value += 1},
        decrement: state => {state.value -= 1},
    },
});

export const store = configureStore({
    reducer: counterSlice.reducer,
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
