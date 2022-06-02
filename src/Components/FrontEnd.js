import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Header-Footer/Header';
import Login from './Login/Login';
import Home from './Home/Home';
import NotFound from './404NotFound/404NotFound';
import Account from "./Login/Account";

import Hotel from './Hotels/Hotels';



class FrontEnd extends Component {

    state = {}

    render() {

        return (

            <div className="FrontEnd">

                <Router>

                    <Header/>

                    <Switch>


                        <Route path="/" exact component={Home}/>
                      
                        <Route path="/logout" component={Login}/>
                        <Route path="/myAccount" component={Account}/>


                        {/*  */}
                        <Route path="/Hotel" component={Hotel}/>
                        

                        {/*  */}
                       
                        <Route path="/Payment/login" component={Login} />
                        

                        <Route path="/ViewAll/logout" component={Login}/>
                        <Route path="/ViewAll/login" component={Login}/>
                        



                        <Route component={NotFound}/>

                    </Switch>


                </Router>

            </div>

        );
    }
}

export default FrontEnd;
