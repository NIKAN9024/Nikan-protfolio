import { Link, Outlet} from "react-router-dom";

function Projects () {
    return (
        <>
        <section className="app">
         <h1 className="title">Projects</h1>
        <ul>
            
        <img src="public/germany.png" alt="project1" />
        <li><Link className="DetailButton" to="/DetailPage">Details</Link></li>
         




         
        <img src="public/escaperoom space station.png" alt="project2" />
        <li><Link className="DetailButton" to="/DetailPage">Details</Link></li>
        </ul>

         



        </section>

        <Outlet/>
        </>
    );
};

export default Projects;