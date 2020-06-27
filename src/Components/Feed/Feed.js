import React from 'react';
import './Feed.css';
class Feed extends React.Component{
    render(){
        const {author,download_url} = this.props
        return(
            <div className='div-feed'>
                <p style={{marginLeft:'10px',fontWeight:'600'}}>{author}</p>
                <div className='div-feed-div'>
                    <img src = {download_url} alt=''/>
                </div>
            </div>
        )
    }
}

export default Feed;