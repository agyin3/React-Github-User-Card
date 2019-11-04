import React, { Component } from 'react';
import UserCard from './components/UserCard.js';
import SearchForm from './components/SearchForm.js';
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
    <div>
      <SearchForm handleChange={this.handleChange} value={this.state.search} handleSubmit={this.handleSubmit} />
     <UserCard user={this.state.userData} followers={this.state.userFollowers} />
    </div>
  );
  }
}

export default App;
