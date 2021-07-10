import * as React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        const {
            users
        } = this.props;
        
        console.log(users['jinwon']);
        return (
            <div>
            <h1>Schedule</h1>
            {Object.keys(users).length ? (
                <p>{users['jinwon'].value}</p>
            ) : (
                <p className="loading">LOADING</p>
            )}
            </div>
        )
    }
}  