const Project = ({ project, onShowDetail }) => {
  return (
     <section>
      <img src={project.image} alt="pic" />
      <button onClick={() => onShowDetail(project.id)}>
        Meer info
      </button>
    </section>
    );
}
 
export default Project;