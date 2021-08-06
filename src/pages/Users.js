import * as React from 'react';
import '../css/users.css';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import payment from '../pages/Payment';
import { Button, ButtonToolbar, Alert, Navbar, Nav, Form, FormControl, Spinner, Card , ListGroup, Offcanvas} from 'react-bootstrap';

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
        
      
        this.state = {
            isShow: false,
            key: "null"
        };
    }

    sub_card_click(key) {
        console.log("user on click : " + key);
        this.setState({
            isShow: true,
            key: key
        });
    }
    use_offcanvas() {
        return(
            <>
                <Offcanvas show={this.state.isShow} onHide={
                    () => {
                        this.setState({isShow: false});
                    }
                } placement="bottom"
                style={{height:"80%"}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{this.state.key}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                
                <Switch>
                    <Route exact path="/" component={payment}/>
                </Switch>

                </Offcanvas.Body>
                </Offcanvas>
            </>
        )
    }
    use_hide() {
        console.log("use on hide");
        this.setState({
            isShow: false
        })
    }
    render() {
        const {
            users, name
        } = this.props;

        //console.log(this.state.isShow);
        if(Object.keys(users).length) {
            return (
                <div>
                    <span>검색 대기중...</span>
                    
                    {/* 
                        {users[name] ? (
                            <p>{ users[name].value }</p>
                        ) : (
                            <p className="loading">No Match</p>
                        )}
                    */
                    }
                    
                    {
                        Object.keys(users).map((key)=>(
                            <>
                                <div className="sub-card" key={key} onClick={() => this.sub_card_click(key)}>
                                    <div className="text-wrap">
                                        <h1>{key}</h1>
                                        <p>Lorem ipsum dolor amet, consectuer adispicing elit.</p>
                                    </div>    
                                </div> 
                            </>
                         
                        ))
                    }
                    {
                        this.use_offcanvas()
                    }

                    </div>
            )
        } else {
            return (                                                 
                <div style={{textAlign: "center"}}>
                    <h1>Firebase Loading</h1>
                    <Spinner animation="border" />
                </div>
            )
        }
    }
}  