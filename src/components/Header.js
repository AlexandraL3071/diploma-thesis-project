import React from 'react'
import SearchBar from './SearchBar';
import '../styles/Header.css'

class Header extends React.Component {
    render() {
        return (
            <div id='fixed'>
                <div id='header-container' className='ui container'>
                    <div id='grid' className='ui grid'>
                        <div id='first-column' className='column'>
                            <h2 id='header-value' className='ui header'>e-SPORTS-shopping</h2>
                        </div>
                        <div id='second-column' className='column'>
                            <SearchBar/>
                        </div>
                    </div>
                </div>
                <div className='ui divider'/>
            </div>
        )
    }
}

export default Header;
