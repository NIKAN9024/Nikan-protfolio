import { useParams, useNavigate } from 'react-router-dom';
import projectsData from './project.js';


function DetailPage () {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <section>Project niet gevonden</section>;
  }

  return (
    <section className="project-detail">
      <img src={project.image} alt={project.name} /> {}
      <h2>{project.name}</h2>
      <p><strong>Details:</strong> {project.details}</p>
      <p><strong>Beschrijving:</strong> {project.description}</p>
      <a href="/projects">Terug</a>
    </section>
  );
};

export default DetailPage;