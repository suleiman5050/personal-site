import React from "react";

const Projects = () => {
  return (
    <section className="section projects">
      <div className="section-title">
        <h2>Featured Projects</h2>
      </div>
      <div className="section-center project-center">
        <article className="project">
          <div className="project-container">
            <img
              src="/src/assets/images/project-1.jpg"
              className="project-img"
              alt=""
            />
          </div>
          <div className="project-info">
            <h4 className="project-title">
              Our latest 2000 Ton Grain Storage Silo System in Nigeria
            </h4>
            <button className="btn project-btn">know more</button>
          </div>
        </article>
        <article className="project">
          <div className="project-container">
            <img
              src="/src/assets/images/project-2.jpg"
              className="project-img"
              alt=""
            />
          </div>
          <div className="project-info">
            <h4 className="project-title">
              A 60,000 birds battery cage at Kano
            </h4>
            <button className="btn project-btn">know more</button>
          </div>
        </article>
        <article className="project">
          <div className="project-container">
            <img
              src="/src/assets/images/project-3.jpg"
              className="project-img"
              alt=""
            />
          </div>
          <div className="project-info">
            <h4 className="project-title">
              A completed 10ton capacity rice mill
            </h4>
            <button className="btn project-btn">know more</button>
          </div>
        </article>
        <article className="project">
          <div className="project-container">
            <img
              src="/src/assets/images/project-4.jpg"
              className="project-img"
              alt=""
            />
          </div>
          <div className="project-info">
            <h4 className="project-title">Sesame seeds ready for export</h4>
            <button className="btn project-btn">know more</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
