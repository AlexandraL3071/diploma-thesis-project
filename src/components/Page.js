import React from 'react'
import NavigationBar from './NavigationBar'
import SearchBar from "./SearchBar";

class Page extends React.Component {
    render() {
        return (
            <div>
                <div className="ui container">
                    <NavigationBar />
                </div>
            </div>
        )
    }
}

export default Page;
