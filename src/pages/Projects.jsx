import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  projectsData  from './project.js';
import Project from '../components/Project';


function Projects() {
  const navigate = useNavigate();
  const [projectList] = useState(projectsData);

  const goToDetail = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section>
      <h1>Projecten</h1>
      <h2>Mijn Projecten</h2>
      <section className="card-container">
      
      
      {projectList.map(project => (
        <Project
          key={project.id}
          project={project}
          onShowDetail={goToDetail}
        />
      ))}
      </section>
    </section>
  );
};


export default Projects;