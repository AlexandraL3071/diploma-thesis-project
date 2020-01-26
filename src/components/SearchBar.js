import React from 'react'
import '../styles/SearchBar.css'

class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui fluid category search">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Cauta produsul..."/>
                        <i className="search icon"/>
                </div>
            </div>
        )
    }
}

export default SearchBar;
