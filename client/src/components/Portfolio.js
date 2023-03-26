import react from 'react';

export default function Project() {
    const projectArray = [
        {
            name: "Space Quest",
            description: "This was the first project in my bootcamp",
            github: "https://github.com/Connor812/Space-Quest",
            deployed: "https://connor812.github.io/Space-Quest/",
        },
        {
            name: "Freshest Tomatoes",
            description: "This was my second project in the bootcamp",
            github: "https://github.com/porteous89/project-2-fresh-tomatoes",
            deployed: "https://project-2-fresh-tomatoes.herokuapp.com/",
        },
        {
            name: "Demo Portfolio",
            description: "This is the first version of my bootcamp portfolio",
            github: "https://github.com/navaulakh24/My-Profile",
            deployed: "https://navaulakh24.github.io/My-Profile/",
        },
        {
            name: "My Text Editor",
            description: "This was my second project in the bootcamp",
            github: "https://github.com/navaulakh24/PWA-Text-Editor",
            deployed: "https://damp-headland-65466.herokuapp.com/",
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