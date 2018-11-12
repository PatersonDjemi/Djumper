import React from "react";
import { Container } from 'semantic-ui-react';

import { FilterButton } from "../commonComponents/filterButton";
import Calendar from '@assets/calendar.svg'

const FilterOptions = (props) => {
    return (
        <Container fluid className="filter">
            <FilterButton src={Calendar} imgs={true} name="date" />
            <FilterButton  name="Last 30 days" />
            <FilterButton  name="Completed" />
            <FilterButton  name="Not completed" />
            <FilterButton  name="More options" />    
        </Container>
    );
}

export default FilterOptions;
