import React from 'react'
import '../styles/SearchBar.css'
import {useFirebase} from "react-redux-firebase";
import {Link} from "react-router-dom";

export default function SearchBar() {

    let searchName = "";
    //TODO: write the search value to firebase then retrieve it in AllProducts
    // and make the
    // const search = useSelector(state => state.firebase.data.products.searchValue);

    const firebase = useFirebase();

    const writeToFirebase = () => {
        const dataToWrite = {searchValue: searchName};
        return firebase.push('products/searchValue', dataToWrite);
    };

    const handleChangeSearchValue = (event) => {
        searchName=event.target.value;
    };

    return (
        <div className="ui fluid category search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Cauta produsul..."
                       onChange={handleChangeSearchValue}/>
                <Link to="/produse">
                    <div className="ui button" onClick={writeToFirebase}><i className="search icon"/></div>
                </Link>
            </div>
        </div>
    )
}
