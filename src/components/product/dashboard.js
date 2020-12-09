import React from 'react'
import {connect} from 'react-redux';
import ReactTable from 'react-table';
import logger from 'redux-logger';
import {Redirect, Link} from 'react-router-dom';

class dashboard extends React.Component {
    constructor(props){
        super(props);
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token==null){
            loggedIn=false
        }
        this.state={
            loggedIn,
            user:[
                {
                    id:1,
                    name:'test1',
                    age:'11',
                    gender:'male',
                    email:"test1@gmail.com",
                    phoneNo:'9415346313'
                },
                {
                    id:2,
                    name:'test2',
                    age:'12',
                    gender:'male',
                    email:"test2@gmail.com",
                    phoneNo:'9415346314'
                },
                {
                    id:3,
                    name:'test3',
                    age:'13',
                    gender:'male',
                    email:"test3@gmail.com",
                    phoneNo:'9415346315'
                },
                {
                    id:4,
                    name:'test4',
                    age:'14',
                    gender:'male',
                    email:"test4@gmail.com",
                    phoneNo:'9415346316'
                },
                {
                    id:5,
                    name:'test5',
                    age:'15',
                    gender:'male',
                    email:"test5@gmail.com",
                    phoneNo:'9415346317'
                },
                {
                    id:6,
                    name:'test6',
                    age:'16',
                    gender:'male',
                    email:"test6@gmail.com",
                    phoneNo:'9415346318'
                },
            ]
        }
    }
    render() {
        if(this.state.loggedIn===false){
            return <Redirect to='/'/>
        }
        return (
            <div>               
                <h3>User List</h3>
                <Link to='/logout'>Login out</Link>
                <table border="1">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Gender</td>
                            <td>Email</td>
                            <td>Phone Number</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.user.map(function(user,index){
                        return<tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNo}</td>                                
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps) (dashboard);
