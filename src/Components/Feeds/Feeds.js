import React from 'react';
import axios from 'axios'
import Feed from '../Feed/Feed';
import './feeds.css'
class Feeds extends React.Component{
    state = {
        feeds:null
    }
    unsubscribe = null
    async componentDidMount(){
        console.log("ComponentDiDmount")
        this.unsubscribe = await axios.get('https://picsum.photos/v2/list')
        this.setState({feeds:this.unsubscribe.data})
    }

    componentWillUnmount(){
        this.unsubscribe = null;
    }
    render(){
        const {feeds} = this.state;
        return(
            <div className='div-feeds'>
                {   feeds ?
                    feeds.map(({...f})=> <Feed key={f.id} {...f}/>)
                    :
                    null
                }
            </div>
        )
    }
}

export default Feeds;