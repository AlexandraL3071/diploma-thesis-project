import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class AllProducts extends React.Component {
    render () {
        return (
            <div>
                <div className="ui inverted header">Aici veti gasi toate produsele</div>
                <Link to="cos-cumparaturi"><Button inverted>Vizualizati cosul de cumparaturi</Button></Link>
            </div>
        )
    }
}
