import './App.css';
import SearchResult from "./components/SearchResults/SearchResults";
import {useSelector} from "react-redux";

function App() {
    const dataCopy = useSelector(state => state.data)
    // const executorFilter = dataCopy.map(({executor}) => executor).filter(i => i[0].includes("TURK HAVA YOLLARI A.O."))
    // console.log(executorFilter)
    console.log()

    return (
    <div className="wrapper">
        <SearchResult dataCopy={dataCopy}/>
    </div>
  );
}

export default App;
