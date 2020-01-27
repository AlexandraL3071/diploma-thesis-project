import React from 'react'
import '../styles/Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state={category: props.category};
    }

    imageName = () => {
        return "../images/" + this.state.category + ".jpg";
    }

    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="image">
                        <img src={this.imageName}/>
                    </div>
                </div>
                <div className="extra content">
                    <div id="label" className="label">Echipamente pentru {this.state.category}</div>
                </div>
            </div>
        )
    }
}

export default Card;
