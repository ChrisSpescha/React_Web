import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, Typography, Grid } from '@mui/material';
import {
  faPython,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
    return () => setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Throughout my time as a Repair Technician much of my work was based in
                    problem solving and diagnosing issues in a variety of settings. Upon being
                    introduced to programming I noticed many parallels that highlight, and build
                    upon traits I had developed through my career. Moving forward I hope to
                    utilize those skills to work independently and collaboratively create,
                    innovate and sustain in a new field.
                </p>
                <Grid item xs={12} md={3} component={Card}>
                    <CardContent className="project-card">
                    <Typography color="textSecondary" gutterBottom >
                        Ecommerce Website
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <a href="https://github.com/ChrisSpescha/EcommerceWebsite">Source</a>
                    </Typography>
                    <Typography>
                        tools used
                    </Typography>
                    <Typography variant="body2" component="p">
                        work
                    </Typography>
                    </CardContent>
                </Grid>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faPython} color="#DD0031" />
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='ball-zig-zag-deflect' />;
        </>
    )

}

export default About