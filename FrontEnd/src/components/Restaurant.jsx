import {Component} from "react";
import React from "react";
import {loadItems, placeOrder} from "../api";
import {Button, Card} from "react-bootstrap";

class Restaurant extends Component{

    constructor(props){
        super(props);
        this.state={
            restaurantId:undefined,
            items:[]
        }
    }

    componentDidMount(){
        const { match: { params:{restaurantId} } } = this.props;
        loadItems(restaurantId)
            .then(res => this.setState({
                items:res,
                restaurantId:restaurantId
            }))
            .catch(err => alert(err))
    }

    handleOrderPlace = (itemId) => {
        let payload = {"items":[{"id":itemId}]};
        placeOrder(payload)
            .then(res => alert(JSON.stringify(res)))
            .catch(err => alert(err))
    };

    render () {

        return (
            <div className="container">
                {this.state.items.map((item) => {
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
                                    <Button variant="primary" onClick={() => this.handleOrderPlace(item.id)}>
                                        Order Now
                                    </Button>
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

export default Restaurant
