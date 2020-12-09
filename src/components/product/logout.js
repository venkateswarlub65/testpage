import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';

class logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem('token')
    }
    render() {
        return (
            <div>
                <h1>Log out</h1>
                <Link to='/'>Login Again</Link>
            </div>
        )
    }
}

export default logout;