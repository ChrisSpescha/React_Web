import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Paper, Box} from '@mui/material'
import {allProjects, frontendProjects, backendProjects} from './works'
import './index.scss'

function Frontend() {
  return <>
          <div className="App">
          
              {frontendProjects.map((project) => (
                <div key={project.id}>
                  <h1>{project.name}</h1>
                  <p>{project.tags}</p>
                  <p>{project.link}</p>
                  <br/>
                </div>
              ))}

          </div>
          </>;
}

function Backend() {
  return  <>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="70"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </>
}

function AllDisplay(props) {
  return <>
          <div className="App">
          
              {allProjects.map((project) => (
                <div>
                  <h1>{project.name}</h1>
                  <p>{project.tags}</p>
                  <p>{project.link}</p>
                  <br/>
                </div>
              ))}
            
            

          </div>
          </>;
}

function Greeting(props) {
  const display = props.display;
  if (display === 0) {
    return <AllDisplay key={display} />;
  } else if (display === 1){
    return <Frontend />
  } else {
  return <Backend />;
}
}

function BackEndButton(props) {
  return (
    <Button size='large' variant="outlined" onClick={props.onClick}>
      Front end
    </Button>
  );
}

function FrontEndButton(props) {
  return (
    <Button size='large' variant="outlined" onClick={props.onClick}>
      Back end
    </Button>
  );
}

function AllProjects(props) {
  return (
    <Button size='large' variant="outlined" onClick={props.onClick}>
      All
    </Button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFrontEndClick = this.handleFrontEndClick.bind(this);
    this.handleBackEndClick = this.handleBackEndClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
    this.state = {display: 0};
  }

  handleFrontEndClick() {
    this.setState({display: 1});
  }

  handleBackEndClick() {
    this.setState({display: 2});
  }

  handleAllClick() {
    this.setState({display: 0})
  }

  render() {
    const display = this.state.display;
 

    return (
      <>
      <div className='portfolio-page'>
        <div className='tab-zone text-go'>
          <AllProjects onClick={this.handleAllClick}/>
          <BackEndButton onClick={this.handleFrontEndClick} />
          <FrontEndButton onClick={this.handleBackEndClick} />
        </div>
      </div>
      <div className='portfolio-page '>
        <div className='text-zone text-go'>
        <Greeting display={display} />
        </div>
      </div>
      </>
    );
  }
}



export default App; 