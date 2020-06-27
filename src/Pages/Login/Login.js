import React from 'react';
import {ReactComponent as Logo} from '../../assets/instagram.svg';
import './login.css';
class Login extends React.Component{
    state = {
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.login(true);
        this.setState({email:'',pwd:''});
    }
    render(){
        const {email,pwd} = this.state;
        return(
            <div className='login-div'>
                <div className='logo-div'>
                    <Logo/>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='email' placeholder='email...' name='email' required onChange={this.handleChange} value={email}/>
                        <input type='password' placeholder='password...' name='pwd' required onChange={this.handleChange} value={pwd}/>
                        <button onSubmit={this.handleSubmit}>Log in</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;