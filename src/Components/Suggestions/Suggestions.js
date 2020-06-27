import React from 'react';
import axios from 'axios'
import User from '../User/User';
import './suggestions.css'
class Suggestions extends React.Component{
    state = {
        suggestions:null
    }

    unsubscribe = null
    async componentDidMount(){
        this.unsubscribe = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({suggestions:this.unsubscribe.data})
    }

    componentWillUnmount(){
        this.unsubscribe = null
    }
    render(){
        const {suggestions} = this.state
        return(
            <div className='suggestions-div'>
                <h5 style={{color:'silver'}}>Suggestions For You</h5>
                {
                    suggestions ?
                    suggestions.map(({...sug}) =><User key={sug.id} {...sug}/>)
                    :
                    null
                }
            </div>
        )
    }
}

export default Suggestions;