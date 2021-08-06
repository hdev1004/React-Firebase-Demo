import React, {useState} from 'react';
import '../css/userSearch.css';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import firebaseInit, {fire, getFireDB, setFireDB } from '../firebaseInit';
import { InputGroup,Button, Offcanvas, ButtonToolbar, Alert, Navbar, Nav, Form, FormControl, Spinner, Card } from 'react-bootstrap';

class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isClickToggle: false, isOffcanvas: false, value: '', name: '', users: []};
        

        fire();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    Search(props) {

        const users = props.users;
        const getName = props.name;

        return (
            <Switch>
            <Route exact path="/" render={()=><Users users={users} name={getName}/>}/> 
                {/* <Route exact path="/second" render={()=><Users users={users}/>}/> */} 
            </Switch>
        );
       
    }

      //랜더링을 마친 후
    componentDidMount() {
        getFireDB()
        .then(res =>{
        this.setState({
            users : res.val().users
        })

        console.log("rendering");
        console.log(res.val().users);
        });
    }
    render() {
        const {
            users
        } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <Alert variant='primary'>
                        회원을 검색하는 페이지 입니다.
                    </Alert>
    
                    <Card className="card-main">
                        <Card.Body className="card-body">
                            <h1>회원 검색</h1>
                            <hr/>
                            <br/>
                            <InputGroup className="mb-3"> 
                                <InputGroup.Text id="basic-addon1">성 함</InputGroup.Text>
                                <FormControl
                                value={this.state.name}
                                onChange={this.handleChange}
                                placeholder="이름"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
    
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">전화번호</InputGroup.Text>
                                <FormControl
                                placeholder="전화번호"
                                aria-label="PhoneNumber"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            {
                                /*
                                <Button variant="dark" className="black-btn" type="submit" onClick={() => {
                                    this.setState({
                                        isClickToggle: true
                                    });
                                }}>찾 기</Button>{
                                    
                                }
                                */
                            }
                        </Card.Body>

                        <this.Search users={users} isClickToggle={this.state.isClickToggle} name={this.state.name}></this.Search>
                        {//<this.OffCanvasExample placement='bottom' name='bottom' getstate={this.state}> </this.OffCanvasExample>
                        }
                        
                    </Card>
                </div>
            </form>
        );
    }   
}

export default UserSearch;