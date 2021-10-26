import React from 'react';
import styles from './SearchResult.module.css';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';

export function SearchResult() {
    return (
        <div className={styles['search-result']}>
            <img className={styles['business-image']} src='https://via.placeholder.com/210' alt='business' />
            <div className={styles['business-info']}>
                <h2 className="subtitle">Burger Place</h2>
                <BusinessRating/>
                <p>$$ <span className="tag">Burgers</span> <span className="tag">Fast Food</span></p>
            </div>
            <div className={styles['contact-info']}>
                <p>+16043580935</p>
                <p>Example Street 5</p>
                <p>123456 Berlin</p>
            </div>
        </div>
    )
}