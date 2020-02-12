import React from 'react'
import SearchBar from "./SearchBar";
import FirebaseContext from "./Firebase/Context";

class Header extends React.Component {
    render() {
        return (
            <div>
                <div id="header-container" className="ui container" style={{marginTop: "20px", marginBottom: "20px"}}>
                    <div className="ui grid">
                        <div className="nine wide column">
                            <h3 className="ui header">e-SPORTS-shopping</h3>
                        </div>
                        <div className="four wide column">
                            <FirebaseContext.Consumer>
                                {firebase => {
                                    return (
                                        <SearchBar firebase={firebase}
                                        />
                                    )
                                }}

                            </FirebaseContext.Consumer>
                        </div>
                    </div>
                </div>
                <div className="ui divider"/>
            </div>
        )
    }
}

export default Header;
