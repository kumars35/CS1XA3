import {Component} from "react";
import React from "react";
import {loadRestaurants} from "../api";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            restaurants:[]
        }
    }

    componentDidMount(){
        if(!localStorage.getItem('token')){
            window.location.hash = "signin";
        }else {
            loadRestaurants()
                .then((res) => {
                    this.setState({restaurants: res})
                })
                .catch((err) => alert(err))
        }
    }

    render () {

        return (
            <div className="container">
                {this.state.restaurants.map((restaurant) => {
                    return (
                        <div key={restaurant.id} className='flex_center'>
                            <br/>
                            <Card style={{ width: '18rem' }}>
                                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                                <Card.Body>
                                    <Card.Title>{restaurant.name}</Card.Title>
                                    <Card.Text>
                                        {restaurant.description}
                                        <br/>
                                        Contact: {restaurant.contact}
                                    </Card.Text>
                                    <Button variant="primary">
                                        <Link to={`restaurant/${restaurant.id}`} className="link">
                                            View Menu
                                        </Link>
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

export default Home
