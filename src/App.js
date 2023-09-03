import './App.css';
import SearchResult from "./components/SearchResults/SearchResults";
import {useSelector} from "react-redux";

function App() {
    const dataCopy = useSelector(state => state.data)

    return (
    <div className="wrapper">
        <SearchResult dataCopy={dataCopy}/>
    </div>
  );
}

export default App;
