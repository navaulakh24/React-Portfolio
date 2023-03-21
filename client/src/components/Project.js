import react from 'react';

export default function Project() {
    const projectArray = [
        {
            name: "Project 1",
            description: "This is a project",
            github: "",
            deployed: "",
        },
        {
            name: "Project 2",
            description: "This is a project",
            github: "",
            deployed: "",
        },
        {
            name: "Project 3",
            description: "This is a project",
            github: "",
            deployed: "",
        },
    ];
    return (
        <div>
            <div>
                <h1>Project</h1>
            </div>
            {projectArray.map((project) => {
                return (
                    <div>
                    <div>{project.name}</div>
                    <div>{project.description}</div>
                    </div>
                )
            }

            )}
        </div >
    );
    }