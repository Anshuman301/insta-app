import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import NoMatch from './Pages/404Page/404Page';
class App extends React.Component{
    state = {
        isLogin:false
    }
    handleLogin = (isLogin) => this.setState({isLogin});
    render(){
        const {isLogin} = this.state;
        return(
            <div>
                <Switch>
                   {
                       isLogin ?
                       <Route path='/' component={Home}/>
                       :
                       <Route exact path='/' render = {() =><Login login={this.handleLogin}/>}/>
                   } 
                    <Route path='*' component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}
export default App;