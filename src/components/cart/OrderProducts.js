import React from 'react'

export default class OrderProducts extends React.Component {
   render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">Produsele tale</div>
                </div>
                <div className="content">
                    <h4 className="ui sub header">Pana acum ai adaugat produsele:</h4>
                </div>
                <div className="event">
                    <div className="content">
                        <div className="summary">
                            <div className="description">
                                <div className="four column stackable ui grid">
                                    {console.log(this.props.products.length)}
                                    {this.props.products.map(product => {
                                        return (
                                            <div>
                                                <div className="column">
                                                    {product.name}
                                                </div>
                                                <div className="column">
                                                    x{product.quantity}
                                                </div>
                                                <div className="column">
                                                    {product.price * product.quantity} RON
                                                </div>
                                                <br/>
                                            </div>
                                        )
                                    })
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
