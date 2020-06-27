import React from 'react';
import './user.css'
import { withRouter } from 'react-router';
class User extends React.Component{
    render(){
        const {history,location,match,...sug} = this.props
        return(
            <div className='user-div'>
                <div style={{fontWeight:'bold',cursor:'pointer'}} onClick={() => history.push(`/${sug.username}`,{
                    details: sug
                })}>{sug.username}</div>
                <div style={{fontSize:'0.6rem',color:'silver'}}>{sug.name}</div>
            </div>
        )
    }
}

export default withRouter(User);