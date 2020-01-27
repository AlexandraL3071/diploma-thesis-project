import React from 'react'
import {Link} from "react-router-dom";

export default class TotalPrice extends React.Component {
    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">Detalii cos</div>
                </div>
                <div className="content">
                    <h4 className="ui sub header">Sumar</h4>
                </div>
                <div className="event">
                    <div className="content">
                        <div className="summary">
                            <div className="description">
                                <div style={{marginLeft: "10px", color: "black"}}>
                                    Pana acum aveti: 7 produse
                                </div>
                                <br/>
                                <div style={{marginLeft: "10px", color: "black"}}>
                                    Pret total: 341 RON
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/produse">
                    <div className="ui bottom attached button">
                        <i className="add icon"/>
                        Continua cumparaturile
                    </div>
                </Link>
            </div>
        )
    }
}
