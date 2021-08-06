import React, { Component, useState } from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondPage from './SecondPage';
import { InputGroup, Button, ButtonToolbar, Alert, Navbar, Nav, Form, FormControl, Spinner, Card } from 'react-bootstrap';
const usersAdd = () => {
    return (
        <div>
            <Alert variant='secondary'>
                회원을 추가하는 페이지 입니다.
            </Alert>

            <Card className="card">
                <Card.Body className="card-body">
                    <h1>회원 추가</h1>
                    <hr/>
                    <br/>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">성 함</InputGroup.Text>
                        <FormControl
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

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">포인트</InputGroup.Text>
                        <FormControl
                        placeholder="포인트"
                        aria-label="PhoneNumber"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <Button variant="dark" className="black-btn">등 록</Button>{' '}
                </Card.Body>

               
            </Card>
        </div>
    );
};

export default usersAdd;