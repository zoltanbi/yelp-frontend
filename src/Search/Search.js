import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { SubNav } from '../Navbar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';

export function Search() {

    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const termParam = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(termParam, locationParam);

    if (!termParam || !locationParam) {
        history.push('/');
    }

    function search(term, location) {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location)
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`)
        performSearch({term, location})
    }

    return (
        <div>
            <Navbar term={termParam} location={locationParam} search={search}/>
            <SubNav/>
            <SearchResultsSummary 
                term={searchParams.term} 
                location={searchParams.location} 
                amountResults={amountResults} 
                shownResults={businesses ? businesses.length : 0} 
            />
            <SearchResults businesses={businesses}/>
        </div>
    );
}