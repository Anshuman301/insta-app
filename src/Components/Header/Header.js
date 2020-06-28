import React from 'react';
import {ReactComponent as Logo} from '../../assets/instagram.svg';
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router'
import {ReactComponent as Home } from '../../assets/home.svg';
import {ReactComponent as Explore } from '../../assets/explore.svg';
import './header.css';
class Header extends React.Component{
    render(){
        const {history,handleClick} = this.props
        return(
            <nav>
                <div className='nav-div'>
                    <div className='img-svg'>
                        <Logo  onClick={() => history.push('/')}/>
                    </div>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <NavLink exact  to='/' ><Home className='img-svg'/></NavLink>
                        <NavLink exact to='/explore' ><Explore className='img-svg'/></NavLink>
                        {/* <NavLink to='/myprofile' className='img-svg' activeClassName='active'></NavLink> */}
                        <button className='nav-div-div-button' onClick={() => {
                            handleClick(false)
                            history.push('/')}}>Log out</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header);