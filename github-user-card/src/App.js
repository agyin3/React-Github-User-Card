import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserCard from './components/UserCard.js';
import SearchForm from './components/SearchForm.js';
import FollowersCard from './components/FollowersCard.js';
import './App.css';

class App extends Component {

  state = {
    user: 'agyin3',
    userData: {},
    userFollowers: [],
    search: ''
  }

  getUser = () => {
    fetch(`https://api.github.com/users/${this.state.user}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        userData: res
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  getFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.user}/followers`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        userFollowers: res
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      user: this.state.search,
      search: ''
    })
  }

  componentDidMount() {
    this.getUser();
    this.getFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.user !== this.state.user) {
      this.getUser();
      this.getFollowers();
    }
  }

  render() {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column textAlign='center' width={13}>
          <h1>Github Friends</h1>
        </Grid.Column>
        <Grid.Column width={3}>
          <SearchForm 
          handleChange={this.handleChange} 
          value={this.state.search} 
          handleSubmit={this.handleSubmit} 
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row verticalAlign='top'>
        <Grid.Column textAlign='center' width={4}>
          <h2>User</h2>
          <UserCard user={this.state.userData} followers={this.state.userFollowers} />
        </Grid.Column>
        <Grid.Column textAlign='center' width={12}>
          <h2>Friends</h2>
          <FollowersCard followers={this.state.userFollowers} />
        </Grid.Column>
      </Grid.Row>
     
     </Grid>
  );
  }
}

export default App;
