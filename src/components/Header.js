import React from 'react'
import SearchBar from "./SearchBar";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div id="header-container" className="ui container" style={{marginTop: "20px", marginBottom: "20px"}}>
                    <div className="ui grid">
                        <div className="nine wide column">
                            <h3 className="ui header">e-SPORTS-shopping</h3>
                        </div>
                        <div className="four wide column">
                            <SearchBar/>
                        </div>
                    </div>
                </div>
                <div className="ui divider"/>
            </div>
        )
    }
}

export default Header;
