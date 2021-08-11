import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseInit, {fire, getFireDB, setFireDB, removeFireDB, getFireDB_Select } from '../firebaseInit';
import { Button, ButtonToolbar, Alert, Navbar, Nav, Form, FormControl, Spinner, Card, Tabs, Tab, InputGroup } from 'react-bootstrap';
import { ReactComponent as Trash } from '../svg/trash.svg';
import reactDom from 'react-dom';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        fire();
        this.state = {items: [], colum: []}
    }   

    makeItem = (tit) => {
        let item = (
            <>
                <div className="sub-card-item">
                    <div className={"text-wrap-item " + tit}>
                    <InputGroup className="mb-3">
                        <FormControl
                            //name = {tit + '-' + 'a' + '-' + idx + '-' + key}
                            //onChange={this.handleChange}
                            placeholder="코드"
                            aria-label="코드"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            //name = {tit + '-' + 'b' + '-' + idx}
                            placeholder="품목"
                            aria-label="품목"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            //name = {tit + '-' + 'c' + '-' + idx}
                            placeholder="가격"
                            aria-label="가격"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>   
                        
                    </div>    
                </div> 

                <div className="sub-card-item-delete">
                    <Trash/>
                </div>
            </>
        )

        return item;
    }

    addItem() {
        let curTit = document.querySelector("button[aria-selected='true']").textContent;
        let curTap;
        if(curTit == "펌") {
            curTap = document.querySelector("#uncontrolled-tab-example-tabpane-m1");
        } else if(curTit == "컷") {
            curTap = document.querySelector("#uncontrolled-tab-example-tabpane-m2");
        } else if(curTit == "드라이") {
            curTap = document.querySelector("#uncontrolled-tab-example-tabpane-m3");
        } else if(curTit == "염색") {
            curTap = document.querySelector("#uncontrolled-tab-example-tabpane-m4");
        }
        let putDiv = document.createElement('div');
        putDiv.className = "card-wrap";
        putDiv.innerText = "create Box";
        curTap.prepend(putDiv);

        console.log(curTit + " 추가");

        reactDom.render (
            this.makeItem(curTit), putDiv
        )
        
    }

    saveObj() {
        let tits = ["펌", "컷", "드라이", "염색"];
        let resultObj = {};
        let tempObj = {};
        let item;
        let makeSetObj;
        let all_items;

        tits.map((tit) => (
            all_items = document.querySelectorAll("." + tit),
            all_items.forEach((items)=> (
                item = items.querySelectorAll("input"),
                //console.log(item[0].value + ", " + item[1].value + ", " + item[2].value),
                makeSetObj = {[item[0].value] : {[item[1].value]: item[2].value}},
                
                Object.assign(tempObj, makeSetObj)
                //obj["펌"][item[0].value][item[1].value] = item[2].value
            )),
            resultObj[tit] = tempObj,
            tempObj = {},
            console.log(resultObj)
        ));

        setFireDB('items', resultObj);

        getFireDB()
        .then(res =>{
        this.setState({
            items : res.val().items
        })

        console.log("rendering");
        });
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
            listKey.map((key, idx)=>(
                <>
                <div className="card-wrap">
                    <div className="sub-card-item" key={key + "Div"}>
                        <div className={"text-wrap-item " + tit} key={key + "subDiv"}>
                        <InputGroup className="mb-3">
                            <FormControl
                                //name = {tit + '-' + 'a' + '-' + idx + '-' + key}
                                //onChange={this.handleChange}
                                placeholder="코드"
                                aria-label="코드"
                                aria-describedby="basic-addon1"
                                defaultValue={key}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                //name = {tit + '-' + 'b' + '-' + idx}
                                placeholder="품목"
                                aria-label="품목"
                                aria-describedby="basic-addon1"
                                defaultValue={Object.keys(listState[key])}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                //name = {tit + '-' + 'c' + '-' + idx}
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
                    <div className="menu-item" style={{textAlign: "center"}}>
                        <Button variant="success" style={{width: "100px"}} onClick={() => this.saveObj()}>저장</Button>{' '}
                        <Button variant="secondary" style={{width: "100px"}} onClick={() => this.addItem()}>추가</Button>{' '}<hr></hr>
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