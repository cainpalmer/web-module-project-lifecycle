import React from 'react';
import FollowerList from './FollowerList';
import axios from 'axios';

class Follower extends React.Component {
    constructor() {
        super();
        this.state = {
            following: [],
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/cainpalmer/following`)
        .then(res => this.setState({
            ...this.state,
            following: res.data
        }))
        .catch(err => {
            // console.log(err)
        })
    }

    render() {
        return(
            <div>
                {
                    this.state.following.map(data => {
                        return <FollowerList key = {data.id} following = {data} />
                    })
                }
            </div>
        )
    }
}

export default Follower