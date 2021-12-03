import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { signInWithGoogle } from '../utils/firebase';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5001/api/login').then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
    })
  }

  getData = e => {
    e.preventDefault();
    axiosWithAuth().get('http://localhost:5001/api/data').then(res => {
      console.log(res);
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button onClick={this.login}>Log in</button>
          <button onClick={this.getData}>Test</button>
          <button type="button" onClick={() => signInWithGoogle()}>Log in with google</button>
        </form>
      </div>
    );
  }
}

export default Login;