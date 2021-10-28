import React from 'react';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export function Navbar(props) {
    return (
        <div className={styles['nav-bar']}>
            <Link to='/'><img className={styles.logo} src={logo} alt='belb logo'/></Link>
            <SearchBar small term={props.term} location={props.location}/>
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    )
}