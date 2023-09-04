import {configureStore, createSlice, current} from '@reduxjs/toolkit';
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
    const executor2 = executor[0];
    const airline = segments.flat().map(({ operatingAirline }) => operatingAirline);
    const departureDate = segments.flat().map(({ departureDate }) => departureDate);
    const arrivalDate = segments.flat().map(({ arrivalDate }) => arrivalDate);
    const travelDuration = segments.flat().map(({ travelDuration }) => travelDuration);
    const travelDuration2 = travelDuration[0]
    const stops = segments.flat().map(({ stops }) => stops);
    const stops2 = stops[0];

    return {
        currPrice: total.amount,
        arrCity,
        depCity,
        departureDate,
        travelDuration,
        travelDuration2,
        stops,
        stops2,
        arrivalDate,
        arrAirport,
        depAirport,
        arrAirportName,
        depAirportName,
        airline,
        executor,
        executor2
    };
});


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        data: dataCopy,
        filteredData: dataCopy,
        priceData: dataCopy,
        priceFrom: null,
        priceTo: null,
    },
    reducers: {
        priceAscending: state => {
            state.data.sort((a, b) => a.currPrice - b.currPrice);
        },
        priceDescending: state => {
            state.data.sort((a, b) => b.currPrice - a.currPrice);
        },
        travelDuration: state => {
            state.data.sort((a, b) => a.travelDuration2 - b.travelDuration2);
        },
        stops: state => {
            state.data = state.filteredData.filter(el => el.stops2!== 0);
        },
        withoutStops: state => {
            state.data = state.filteredData.filter(el => el.stops2!== 1);
        },
        filterByCompany: (state, action) => {
            state.data = state.filteredData.filter(item => item.executor2 === action.payload.company)
        },
        filterByPrice: (state, action) => {
            state.priceFrom = parseInt(action.payload.priceFrom)
            state.priceTo = parseInt(action.payload.priceTo)
            state.data =
                state.filteredData.filter(({currPrice}) =>
                    currPrice >= state.priceFrom && currPrice <= state.priceTo);
        },

    },
});

export const {
    priceAscending,
    priceDescending,
    travelDuration,
    withoutStops,
    stops,
    filterByCompany,
    filterByPrice,
} = counterSlice.actions;

export default counterSlice.reducer;

export const store = configureStore({
    reducer: counterSlice.reducer,
});
