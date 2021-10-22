import React from 'react';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';

export function Navbar() {
    return (
        <div className={styles['nav-bar']}>
            <img className={styles.logo} src={logo} alt='belb logo'/>
            <SearchBar small/>
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    )
}