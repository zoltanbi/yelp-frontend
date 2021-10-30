import React from 'react';
import styles from './SearchResult.module.css';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';

export function SearchResult({business}) {

    if (!business) {
        return (<div/>);
    }

    const tags = business.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={business.id + category.title}>{category.title}</span>))

    const addressLines = business.location.display_address.map(addressLine => <p key={business.id + addressLine}>{addressLine}</p>)

    return (
        <div className={styles['search-result']}>
            <img className={styles['business-image']} src={business.image_url} alt='business' />
            <div className={styles['business-info']}>
                <h2 className="subtitle">{business.name}</h2>
                <BusinessRating reviewCount={business.review_count} rating={business.rating}/>
                <p>{business.price} {tags}</p>
            </div>
            <div className={styles['contact-info']}>
                <p>{business.phone}</p>
                {addressLines}
            </div>
        </div>
    )
}