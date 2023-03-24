import uniqid from "uniqid";
import { projects } from "../../data/projects";
import ProjectContainer from "./projectContainer";
import "./projects.css";

const Projects = () => {
    if (!projects.lenght) return null;
    return (
        <section id='projects' className='section projects'>
            <h1 className='section-title text-center m-5'>Projects</h1>
            <div className='projects-grid'>
                {projects.map((project) => (
                    <ProjectContainer key={uniqid()} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;