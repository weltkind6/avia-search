import './App.css';
import flightsData from "./mock/flights.json";
import SearchResult from "./components/SearchResults/SearchResults";


function App() {

    const currData = flightsData.results.flights
        .map(({flight}) => flight)
        .map(({price}) => price)
        .map(({total}) => total)

    const currData1 = flightsData.results.flights
        .map(({flight}) => flight)

    const dataCopy = currData1.map(({ price, legs }) => {
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
        console.log('travelDuration', travelDuration)


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

  return (
    <div className="wrapper">
     <h1>Avia sales</h1>
        <SearchResult data={currData} dataCopy={dataCopy}/>
    </div>
  );
}

export default App;
