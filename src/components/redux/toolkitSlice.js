import {configureStore, createSlice} from '@reduxjs/toolkit';
import data from "../../mock/flights.json";

const mockData = data.results.flights.map(({flight}) => flight)
const dataCopy = mockData.map(({ price, legs }) => {
    const { total } = price;
    const segments = legs.map(({ segments }) => segments);
    const arrCity = segments.flat().map(({ arrivalCity }) => arrivalCity.caption);
    const depCity = segments.flat().map(({ departureCity }) => departureCity.caption);
    const depAirport = segments.flat().map(({ departureAirport }) => departureAirport.uid);
    const arrAirport = segments.flat().map(({ arrivalAirport }) => arrivalAirport.uid);
    const depAirportName = segments.flat().map(({ departureAirport }) => departureAirport.caption);
    const arrAirportName = segments.flat().map(({ arrivalAirport }) => arrivalAirport.caption);
    const executor = segments.flat().map(({ airline }) => airline.caption);
    const airline = segments.flat().map(({ operatingAirline }) => operatingAirline);
    const departureDate = segments.flat().map(({ departureDate }) => departureDate);
    const arrivalDate = segments.flat().map(({ arrivalDate }) => arrivalDate);
    const travelDuration = segments.flat().map(({ travelDuration }) => travelDuration);
    const stops = segments.flat().map(({ stops }) => stops);

    return {
        currPrice: total.amount,
        arrCity,
        depCity,
        departureDate,
        travelDuration,
        stops,
        arrivalDate,
        arrAirport,
        depAirport,
        arrAirportName,
        depAirportName,
        airline,
        executor
    };
});


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        data: dataCopy,
    },
    reducers: {
        priceAscending: state => {
            state.data.sort((a, b) => a.currPrice - b.currPrice);
        },
        priceDescending: state => {
            state.data.sort((a, b) => b.currPrice - a.currPrice);
        },

    },
});

export const { priceAscending, priceDescending } = counterSlice.actions;

export default counterSlice.reducer;

export const store = configureStore({
    reducer: counterSlice.reducer,
});
