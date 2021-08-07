import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseInit, {fire, getFireDB, setFireDB } from '../firebaseInit';
import { Button, ButtonToolbar, Alert, Navbar, Nav, Form, FormControl, Spinner, Card, Tabs, Tab, InputGroup } from 'react-bootstrap';
import { ReactComponent as Trash } from '../svg/trash.svg';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        fire();
        this.state = {items: []}
    }   
    componentDidMount() {
        getFireDB()
        .then(res =>{
        this.setState({
            items : res.val().items
        })

        console.log("rendering");
        });
    }

    handleChange = (e) => {
        setFireDB('items','컷/3/Test', '10');
        
        
        
        getFireDB()
        .then(res =>{
        this.setState({
            items : res.val().items
        })});

        console.log(this.state.items);
       
    }
    item_list(tit) {
        let listKey;
        let listState;

        if(tit == "펌") {
            listKey = Object.keys(this.state.items.펌);
            listState = this.state.items.펌;
        }
        else if(tit == "컷") {
            listKey = Object.keys(this.state.items.컷);
            listState = this.state.items.컷;
        }
        else if(tit == "드라이") {
            listKey = Object.keys(this.state.items.드라이);
            listState = this.state.items.드라이;
        }
        else if(tit == "염색") {
            listKey = Object.keys(this.state.items.염색);
            listState = this.state.items.염색;
        }

        return (
            listKey.map((key)=>(
                <>
                <div className="card-wrap">
                    <div className="sub-card-item" key={key + "Div"}>
                        <div className="text-wrap-item" key={key + "subDiv"}>
                        <InputGroup className="mb-3">
                            <FormControl
                                name = {key}
                                onChange={this.handleChange}
                                placeholder="코드"
                                aria-label="코드"
                                aria-describedby="basic-addon1"
                                defaultValue={key}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="품목"
                                aria-label="품목"
                                aria-describedby="basic-addon1"
                                defaultValue={Object.keys(listState[key])}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="가격"
                                aria-label="가격"
                                aria-describedby="basic-addon1"
                                defaultValue={Object.values(listState[key])}
                            />
                        </InputGroup>   
                            
                        </div>    
                    </div> 

                    <div className="sub-card-item-delete">
                        <Trash/>
                    </div>
                </div>
                   
                </>
            
            ))
        )
        
    }

    render() {
        if(Object.keys(this.state.items).length) {
            return (
                <>
                    <div className="menu-item">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" defaultActiveKey="m1">
                            <Tab eventKey="m1" title="펌">
                                {this.item_list("펌")}
                            </Tab>
                            <Tab eventKey="m2" title="컷">
                                {this.item_list("컷")}  
                            </Tab>
                            <Tab eventKey="m3" title="드라이">
                                {this.item_list("드라이")}
                            </Tab>
                            <Tab eventKey="m4" title="염색">
                                {this.item_list("염색")}
                            </Tab>
                            
                        </Tabs>
                    </div>
                </>
            )
        } else {
            return (                                                 
                <div style={{textAlign:"center"}}>
                    <h1>Firebase Loading</h1>
                    <Spinner animation="border" />
                </div>
            )
        }
    }
}