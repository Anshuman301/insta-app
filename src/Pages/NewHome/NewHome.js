import React from 'react';
import Feeds from '../../Components/Feeds/Feeds';
import Suggestions from '../../Components/Suggestions/Suggestions';
import './newHome.css'
class NewHome extends React.Component{
    render(){
        return(
            <div className='div-newhome'>
                <Feeds/>
                <Suggestions/>
            </div>
        )
    }
}

export default NewHome;