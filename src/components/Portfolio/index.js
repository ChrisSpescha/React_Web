import React from "react";
import './index.scss'


class Filter extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <ul>
        {/* map over the users array */}
        {this.props.projects.map((project) => (
          // display a <div> element with the user.name and user.type
          // parent element needs to have a unique key
          <div key={project.id}>
            <p >{project.name}</p>
            <li >{project.tags}</li>
            <li >{project.link}</li>
            <br/>
          </div>
        ))}
      </ul>
      )
    }
  }



  class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects : [
                {index: 0,
                name: "Ecommerce Website",
                tags: ['Python ', 'Flask ' , 'SQLAlchemy ', 'SQL ', 'HTML ', 'CSS '],
                link: 'https://github.com/ChrisSpescha/EcommerceWebsite'
                },
                {
                index: 1,
                name: "Personal Website",
                tags: ['Javascript', 'ReactJS', 'Material UI', 'React Router', 'HTML', 'CSS'],
                link: 'https://github.com/ChrisSpescha/React_Web'
                },
                {
                index: 2,  
                name: "React Chart",
                tags: ['Javascript', 'ReactJS', 'Axios', 'HTML', 'CSS'],
                link: 'https://github.com/ChrisSpescha/react-chart'
                }
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    filterTag(userTag) {
      let taggedProjects = []
      for (const element of this.state.projects) {
        for (const tag of element.tags) {
          if (userTag.toLowerCase() === tag.toLowerCase()) {
            taggedProjects.push(element)
          } 
        }
      }
      return taggedProjects;
    } 

    handleClick() {
      console.log(this.state.projects)
        this.setState({
            projects: this.filterTag('ReactJS') 
        });
    }

    render() {
      return (
        <>
      <div className="container porfolio-page text-zone">
          <button onClick={this.handleClick}>Play Again</button>
          { /* change code below this line */ }
          <Filter projects={this.state.projects} />
          { /* change code above this line */ }
      </div>
      </>
      );
      }   
}

export default Portfolio;