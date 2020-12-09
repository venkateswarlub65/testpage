import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';
import dashboard from '../product/dashboard';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            email: '',
            password: '',
            loggedIn
        };
    }


    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.login(email, password);
        //this.props.history.push(dashboard);
        if (email === "hruday@gmail.com" && password === "hruday123") {
            localStorage.setItem("token", "abc")
            this.setState({
                loggedIn: true
            })
        }
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to='/dashboard' />
        }
        let { email, password } = this.state;
        let { isLoginPending, isLoginSuccess, LoginError } = this.props;
        return (
            <div>
                <h3>User Login</h3>
                <div onSubmit={this.onSubmit}>
                    <form name="login">
                        <div className="form-group">
                            <label>Enter Email</label>&nbsp;
                        <input type="email" name="email" placeholder="Enter User Name" onChange={e => this.setState({ email: e.target.value })} /><br></br>
                        </div>
                        <div className="form-group">
                            <label>Enter Password</label>&nbsp;
                          <input type="password" name="password" placeholder="Enter Password" onChange={e => this.setState({ password: e.target.value })} /><br></br>
                          </div>
                        <input type="submit" className="btn btn-primary" value="Login" />
                        {isLoginPending && <div> Please wait...</div>}
                        {/* {isLoginSuccess && <div> welcome</div>} */}
                        {LoginError && <div style={{ color: 'red' }}>{LoginError.message}</div>}
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        LoginError: state.LoginError,

    };
}

const mapDispatchToProps = (dispatch) => { 
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
