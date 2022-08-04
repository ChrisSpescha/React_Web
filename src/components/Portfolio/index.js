import React, { useState } from 'react'
function App() {
  const defProjects = [
    {index: 1,
    name: "Ecommerce Website",
    tags: [' Front End', ' Back End',' Python', ' Flask', ' SQLAlchemy', ' SQL', ' HTML', ' CSS'],
    link: 'https://github.com/ChrisSpescha/EcommerceWebsite'
    },
    {
    index: 2,
    name: "Personal Website",
    tags: [' Front End',' Javascript', ' ReactJS', ' Material UI', ' React Router', ' HTML', ' CSS'],
    link: 'https://github.com/ChrisSpescha/React_Web'
    },
    {
    index: 3,  
    name: "React Chart",
    tags: [' Front End',' Javascript', ' ReactJS', ' Axios', ' HTML', ' CSS'],
    link: 'https://github.com/ChrisSpescha/react-chart'
    },
    {
      index: 4,  
      name: "Trading Bot",
      tags: [' Back End', ' PIL', ' Numpy', ' Pandas'],
      link: 'https://github.com/ChrisSpescha/react-chart'
      }
  ]
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
    // parent div to hold the ul and li's
    <>
    <div className="App">
      <button onClick={event => handleClick(event, " Front End")}>Front End</button>
      <button onClick={event => handleClick(event, " Back End")}>Back End</button>
      <button onClick={resetState}>back</button>


      <ul>
        {/* map over the users array */}
        {projects.map((project) => (
          // display a <div> element with the user.name and user.type
          // parent element needs to have a unique key
          <div key={project.id}>
            <p>{project.name}</p>
            <li>{project.tags}</li>
            <li>{project.link}</li>
            <br/>
          </div>
        ))}
      </ul>
      </div>
      </>
  );
};
export default App; 




  // function decrementCount() {
  //   setState(prevState =>{
  //     return {count: prevState.count -1}
  //   })
  // }

  // function incrementCount() {
  //   setState(prevState =>{
  //     return { ...prevState, count: prevState.count -1}
  //   })
  // }

