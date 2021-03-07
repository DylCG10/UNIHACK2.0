import { Component, useEffect } from 'react';
import io from 'socket.io-client';

// import './App.css';

import '../styling/styles.css'
import { removeTypeDuplicates } from '@babel/types';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'; 

import { loginRequest } from './actions.js';

// function Session() {
//   function HostingDialogue() {
  
//     console.log("a user connected");
//     return (
//       <h1>Hosting</h1>
//     )
//   }
  
//   function JoiningDialogue() {
//     return (
//       <h1>Joining</h1>
//     )
//   }


// }

class Login extends Component{
  // const hostSessionButton = document.querySelector("#host-session");
  // const joinSessionButton = document.querySelector("#join-session");

  // this.state = {
  //   hosting: false,
  //   joining: false
  // }

  constructor(props) {
    super(props);
    this.state = {
      hosting: false,
      joining: false,
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // socket.on('new-remote-operations',
    //   ({ editorId, ops }: { editorId: string; ops: string }) => {
    //     if (id.current !== editorId) {
    //       re
    //     }
    //   }
      
    // }))
  }

  handleChange(event) {
    this.setState({username: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();

    console.log("Username: ", this.state.username);
    // socket.on('new-remote-operations',
    //   ({ editorId, ops }: { editorId: string; ops: string }) => {
    //     if (id.current !== editorId) {
    //       re
    //     }
    //   }
      
    // }))
    this.props.loginRequest({username: this.state.username, hosting: this.state.hosting});
  }

  joinSess = () => {
    console.log("joining session..");
    
    this.setState({ hosting: false, joining: true})


  }

  hostSess = () => {
    console.log("hosting session...");
    this.setState({ hosting: true, joining: false })
    
  }


  

  //Listeners
  // if (joinSessionButton)
  //   joinSessionButton.addEventListener('click', joinSess);
  // if (hostSessionButton)
  //   hostSessionButton.addEventListener('click', hostSess);

  
  render() {
  return (
    <div className="App">
      <div className="nav-container">
        <nav className="navbar">
          <a href="/" id="site-title">Movie App</a>
          <nav className="navlinks">
            <a href="/" className="link" id="home">Home</a>
            <a href="/" className="link" id="instructions">Instructions</a>
            <a href="/" className="link" id="feedback">Give feedback</a>
          </nav>
        </nav>
      </div>
      <div className="body">
        <div className="body-text">
          <h1>The. Syntax. Choice.</h1>
          <h2>All your movie commitment issues solved!</h2>
        </div>
        <div className="body-button">
          <div className="hosting">
            <button id="host-session" type="submit" onClick={this.hostSess}><h2>Host new session</h2></button>
            {this.state.hosting &&
              <div className="host-pop-box">
                <div className="host-pop-content">
                  <p id="host-text">Enter your name to start hosting</p>
                  <form id="host-form" onSubmit = {this.handleSubmit}>
                  <input class="input" placeholder="Speedy Gonzalez" onChange={this.handleChange}></input>
                    <div className="button-host">
                      <button className="cancel">Cancel</button>
                      <button className="submit" type="submit" >Let's go</button>
                    </div>
                  </form>
                </div>
              </div>
            }
          </div>
          <div className="joining">
            <button id="join-session" type="submit" onClick={this.joinSess}><h2>Join session</h2></button>
            {this.state.joining && 
              <div className="join-pop-box">
                <div className="join-pop-content">
                  <p>Enter your name and group ID to start choosing movies!</p>
                  <form id="join-form">
                    <input class="input" placeholder = "Speedy Gonzalez"></input>
                    <input class="input" placeholder = "#abc123"></input>
                    <div className="button-join">
                      <button className="cancel">Cancel</button>
                      <button className="submit" type="submit" onClick={this.submit}>Enter</button>
                    </div>
                  </form>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );

  }

}

const mapStateToProps = state => ({
  login: state.login
});
  
const connected = connect(mapStateToProps, { loginRequest })(Login);
const formed = reduxForm({
  form: 'login'
})(connected);

export default formed;

// export default App;
