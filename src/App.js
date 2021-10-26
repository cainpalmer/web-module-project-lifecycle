import React from 'react';
import axios from 'axios';
import Follower from './components/Follower';
import User from './components/User';
import './App.css';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

componentDidMount() {
  axios.get(`https://api.github.com/users/cainpalmer`)
  .then(res => this.setState({
    ...this.state,
    user: res.data
  }))
  .catch(err => {
    // console.log(err)
  });
}

  render() {
    return(
    <div>
      <h1>Cain's Following on GitHub</h1>
      <User login = {this.state.user.login} folllowing = {this.state.user.following} avatar = {this.state.user.avatar_url} />
      <Follower />
    </div>
    );
  }
}

export default App;
