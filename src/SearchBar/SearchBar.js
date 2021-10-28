import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props) {

    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();
    }

    const sizeClass = props.small ? '' : 'is-medium';

    return (
        <form onSubmit={submit}>
            <div className="field has-addons">
                <span className="control">
                    <div className={`button is-static ${sizeClass}`}>Search</div>
                </span>
                <span className="control">
                    <input 
                        className={`input ${sizeClass} ${styles[`input-control`]}`} 
                        onChange={(e) => setTerm(e.target.value)}
                        type="text" 
                        value={term}
                        placeholder="burgers, barbers, spas, handymen"
                    />
                </span>
                <span className="control">
                <div className={`button is-static ${sizeClass}`}>NEAR</div>
                </span>
                <span className="control">
                    <input 
                        className={`input ${sizeClass} ${styles[`input-control`]}`} 
                        onChange={(e) => setLocation(e.target.value)}
                        type="text" 
                        value={location}
                        placeholder="Where"
                    />
                </span>
                <button className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
                    <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-search"></i></span>
                </button>
            </div>
        </form>
    )
}