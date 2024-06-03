import styles from './ProjectsStyles.module.css';
import loja from '../../assets/Loja.jpeg';
import trabalho from '../../assets/Trabalho.jpeg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={loja}
          h3="Loja de Roupas"
          p="Estou desenvolvendo uma E-Comerce"
        />
        <ProjectCard
          src={trabalho}
          h3="Assinatura HTML"
          p="Esse é meu primeiro trabalho."
        />
      </div>
    </section>
  );
}

export default Projects;
