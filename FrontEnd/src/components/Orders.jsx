import {Component} from "react";
import React from "react";
import {Card} from "react-bootstrap";
import {loadOrders} from "../api";

class Orders extends Component {
    constructor(prop){
        super(prop);
        this.state= {
            orders:[]
        }
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location.hash = "signin";
        }else {
            loadOrders()
                .then(res => this.setState({orders: res}))
                .catch(err => alert(err))
        }
    }

    render(){
        return(
            <div className="container">
                {this.state.orders.map((order) => {
                    let item = order.item;
                    return (
                        <div key={item.id} className='flex_center'>
                            <br/>
                            <Card style={{ width: '18rem' }}>
                                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.quantity}
                                        <br/>
                                        Price: {item.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Orders
