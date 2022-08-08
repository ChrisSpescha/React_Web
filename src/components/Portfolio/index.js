import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Paper, Box} from '@mui/material'
import {allProjects, frontendProjects, backendProjects} from './works'
import './index.scss'

function Frontend() {
  return <>
          <div className="App">
            <ul>
              {frontendProjects.map((project) => (
                <div key={project.id}>
                  <h1>{project.name}</h1>
                  <p>{project.tags}</p>
                  <p>{project.link}</p>
                  <br/>
                </div>
              ))}
            </ul>
            

          </div>
          </>;
}

function Backend() {
  return <>
          <div className="App">
            <ul>
              {backendProjects.map((project) => (
                <div key={project.id}>
                  <h1>{project.name}</h1>
                  <p>{project.tags}</p>
                  <p>{project.link}</p>
                  <br/>
                </div>
              ))}
            </ul>
            

          </div>
          </>;
}

function AllDisplay() {
  return <>
          <div className="App">
            <ul>
              {allProjects.map((project) => (
                <div key={project.id}>
                  <h1>{project.name}</h1>
                  <p >{project.tags}</p>
                  <p >{project.link}</p>
                  <br/>
                </div>
              ))}
            </ul>
            

          </div>
          </>;
}

function Greeting(props) {
  const display = props.display;
  if (display === 0) {
    return <AllDisplay />;
  } else if (display === 1){
    return <Frontend />
  } else {
  return <Backend />;
}
}

function LoginButton(props) {
  return (
    <Button variant="outlined" onClick={props.onClick}>
      Front end
    </Button>
  );
}

function LogoutButton(props) {
  return (
    <Button variant="outlined" onClick={props.onClick}>
      Back end
    </Button>
  );
}

function AllProjects(props) {
  return (
    <Button variant="outlined" onClick={props.onClick}>
      All
    </Button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
    this.state = {display: 0};
  }

  handleLoginClick() {
    this.setState({display: 1});
  }

  handleLogoutClick() {
    this.setState({display: 2});
  }

  handleAllClick() {
    this.setState({display: 0})
  }

  render() {
    const display = this.state.display;
 

    return (
      <div className='portfolio-page'>
        <div className='text-zone'>
        <AllProjects onClick={this.handleAllClick}/>
        <LoginButton onClick={this.handleLoginClick} />
        <LogoutButton onClick={this.handleLogoutClick} />
        <Greeting display={display} />
        </div>
      </div>
    );
  }
}



export default App; 