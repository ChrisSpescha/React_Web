import React, { useState } from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Paper, Box} from '@mui/material'
import { styled } from '@mui/material/styles';
import defProjects from './works'
import './index.scss'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  const [projects, setProjects] = useState(() => defProjects)

  function filterTag(userTag) {
    let taggedProjects = []
    for (const element of projects) {
      for (const tag of element.tags) {
        if (userTag.toLowerCase() === tag.toLowerCase()) {
          taggedProjects.push(element)
        } 
      }
    }
    return taggedProjects;
  } 

  const resetState = () => {
    setProjects(defProjects);
  };


  const handleClick = (event, param) => {
    event.preventDefault();
    setProjects(filterTag(param))
  }

  return (
    <>
    
 
      <div className="container portfolio-page">
      <div className='tab-zone'>
          <Button variant="outlined" onClick={event => handleClick(event, " Front End")}>
          Front End
          </Button>
          <Button variant="outlined" onClick={event => handleClick(event, " Back End")}>
          Back End
          </Button>
          <Button variant="text" onClick={resetState}>
          clear
          </Button>
        </div>
            <div className="text-zone">
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 2fr)" gap={2} columns={8}>
                  {projects.map((project) => (
                                        <>

                  <Box gridColumn="span 6">
                    <Item>{project.name}</Item>
                  </Box>
                  <Box gridColumn="span 6">
                    <Item>xs=4</Item>
                  </Box>
                 
                  </>

                    ))}
              </Box>
            </Box>
            </div>
      </div>
    </>
  );
}

export default App; 