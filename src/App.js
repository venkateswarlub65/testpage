import React from 'react';
import './App.css';
import Login from './components/product/login';
import dashboard from './components/product/dashboard';
import logout from './components/product/logout';
import { Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <h3> 
      <br></br>
      <Route path="/dashboard" component={dashboard}></Route>
      {/* <Route exact path="/"  component={AddProduct}></Route> */}
      <Route exact path="/"  component={Login}></Route>
      <Route exact path="/logout"  component={logout}></Route>
      </h3>   
      </BrowserRouter>
       </div>
  );
}

export default App;
