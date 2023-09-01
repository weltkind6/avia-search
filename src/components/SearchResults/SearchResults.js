import React from 'react';
import Ticket from "../common/Ticket/Ticket";

const SearchResult = ({ data, dataCopy }) => {

    return (
        <div>
            <Ticket data={data} dataCopy={dataCopy}/>
        </div>
    );
};

export default SearchResult;
