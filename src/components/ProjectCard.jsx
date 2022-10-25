import React from 'react'

const ProjectCard = ({project}) => {
  return (
        <div className='project'>
            <img src= {project.imgUrl} />
            <div className="project-Text">
                <h4>{project.title}</h4>
                <span>{project.description}</span>
            </div>
        </div>
  )
}

export default ProjectCard;