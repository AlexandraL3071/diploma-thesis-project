import React from 'react'
import '../styles/CategoryCard.css'

export class CategoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={category: props.category};
    }

    imageName = () => {
        return "../images/" + this.state.category + ".jpg";
    }

    render() {
        return (
            <div className="ui inverted card">
                <div className="content">
                    <div className="image" >
                        <img src={this.imageName} alt="Nothing"/>
                    </div>
                </div>
                <div className="extra content">
                    <div id="label" className="label">Echipamente pentru {this.state.category}</div>
                </div>
            </div>
        )
    }
}
