import React from 'react';
import ProjectContainer from './ProjectContainer';

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px'
    }
  }
export default function Project() {
    const projectArray = [
        {
            name: "Space Quest",
            image: "deuheh",
            description: "This was the first project in my bootcamp",
            github: "https://github.com/Connor812/Space-Quest",
            deployed: "https://connor812.github.io/Space-Quest/",
        },
        {
            name: "Freshest Tomatoes",
            image: "deuheh",
            description: "This was my second project in the bootcamp",
            github: "https://github.com/porteous89/project-2-fresh-tomatoes",
            deployed: "https://project-2-fresh-tomatoes.herokuapp.com/",
        },
        {
            name: "Demo Portfolio",
            image: "deuheh",
            description: "This is the first version of my bootcamp portfolio",
            github: "https://github.com/navaulakh24/My-Profile",
            deployed: "https://navaulakh24.github.io/My-Profile/",
        },
        {
            name: "My Text Editor",
            image: "deuheh",
            description: "This was my second project in the bootcamp",
            github: "https://github.com/navaulakh24/PWA-Text-Editor",
            deployed: "https://damp-headland-65466.herokuapp.com/",
        },
    ];
    return (
        <div style={styles.container}>
          <h1>Project</h1>
          {projectArray.map((project) => {
            return (
              <ProjectContainer project={project} />
            )
          })}
        </div>
      );
    
    }

