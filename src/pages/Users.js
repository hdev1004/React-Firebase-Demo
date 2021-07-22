import * as React from 'react';
import '../css/users.css';
import { Button, ButtonToolbar, Alert, Navbar, Nav, Form, FormControl, Spinner, Card , ListGroup} from 'react-bootstrap';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            users, name
        } = this.props;
        

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
                            (key.indexOf(name) !== -1 && name != '') ? (
                                <div className="click" key={key}>
                                    {/* 이름 중복 찾기 */}
                                    {Object.keys(users[key]).map((n) => (
                                        <div key={'name' + n}>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Header>{key}</Card.Header>
                                                <ListGroup variant="flush" style={{textAlign: "left"}}>
                                                    <ListGroup.Item>전화번호 : {users[key][n].phone}</ListGroup.Item>
                                                    <ListGroup.Item>포인트 : {users[key][n].point}</ListGroup.Item>
                                                    {/* 타임라인 중복 찾기 */}
                                                    {(users[key][n].visit != 0) ? (
                                                        <>
                                                            <ListGroup.Item>최근날짜 : {users[key][n]['timeline'][1].date}</ListGroup.Item>
                                                            <ListGroup.Item>매세지 : {users[key][n]['timeline'][1].msg}</ListGroup.Item>
                                                        </>
                                                    ) : (
                                                        <span/>
                                                    )}
                                                </ListGroup>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                             ) : <p></p>
                            

                        ))}
                    </div>
            )
        } else {
            return (
                <div>
                    <h1>Firebase Loading</h1>
                    <Spinner animation="border" />
                </div>
            )
        }
    }
}  