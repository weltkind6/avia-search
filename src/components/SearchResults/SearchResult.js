import React from 'react';
import Ticket from "../common/Ticket/Ticket";

const SearchResult = ({data}) => {

    return (
        <div>
            <Ticket data={data}/>
        </div>
    );
};

export default SearchResult;
