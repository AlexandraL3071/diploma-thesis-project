import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class Bodybuilding_Category extends React.Component {
    render () {
        return (
            <div>
                <h2 className="ui header">Aici vei gasi echipamente de culturism si fitness</h2>
                <Link to="/categorii"><Button>Inapoi</Button></Link>
            </div>
        )
    }
}
