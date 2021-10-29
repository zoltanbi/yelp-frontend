import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { SubNav } from '../Navbar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';

export function Search() {

    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const termParam = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(termParam, locationParam);


    return (
        <div>
            <Navbar term={termParam} location={locationParam}/>
            <SubNav/>
            <SearchResultsSummary term={termParam} location={locationParam}/>
            <SearchResults businesses={businesses}/>
        </div>
    );
}