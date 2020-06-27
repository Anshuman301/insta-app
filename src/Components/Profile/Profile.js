import React from 'react';
import {ReactComponent as User} from '../../assets/user.svg';
import './profile.css';
class Profile extends React.Component{
    render(){
        const {username,name,email} = this.props.location.state.details
        return(
            <div className='div-profile'>
                <div className='div-user'>
                    <User style={{width:'150px',height:'auto'}}/>
                </div>
                <div className='div-profile-div'>
                    <div style={{fontSize:'2.5rem'}}>{username}</div>
                    <div style={{fontWeight:'bold'}}>{name}</div>
                    <div>{email}</div>
                </div>
            </div>
        )
    }
}

export default Profile;
