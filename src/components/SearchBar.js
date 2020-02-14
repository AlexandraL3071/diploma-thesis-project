import React, {useState} from 'react'
import '../styles/SearchBar.css'
import {useFirebase} from 'react-redux-firebase';
import {Link} from 'react-router-dom';
import {PRODUCTS_LINK, PRODUCTS_REF} from "../utils/linkNames";

export default function SearchBar() {

    const [searchName, setSearchName] = useState('');

    const firebase = useFirebase();

    const writeToFirebase = () => {
        const ref = firebase.ref(PRODUCTS_REF);
        ref.update({'searchValue': searchName.toLowerCase()});
        setSearchName('');
    };

    const handleChangeSearchValue = (event) => {
        setSearchName(event.target.value);
    };

    return (
        <div className='ui fluid category search'>
            <div className='ui icon input'>
                <input className='prompt' type='text' placeholder='Cauta produsul...' value={searchName}
                       onChange={handleChangeSearchValue}/>
                <Link to={PRODUCTS_LINK}>
                    <div className='ui button' onClick={writeToFirebase}><i className='search icon'/></div>
                </Link>
            </div>
        </div>
    )
}
