import React, { useState, useEffect } from "react";
import Modal from "./1Modal";
import project from "../../Data/Project";
import { icons } from "../../Data/Project";

import "./1project.css";

function Projects() {
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState({
    name: "",
    photo: "",
    category: "",
    text: "",
    tech: [],
    property: [],
    date: "",
    link: "",
    learn: [],
  });

  useEffect(() => {
    if (modalActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [modalActive]);

  const openModal = (project) => {
    setModalData({
      name: project.name,
      photo: project.photo,
      category: project.category,
      text: project.text,
      tech: project.tech,
      property: project.property,
      date: project.date,
      link: project.link,
      learn: project.learn,
    });
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <section className="projects">
      <ul className="projects-list">
        {project.map((project, index) => (
          <li
            key={index}
            className="projects-item"
            onClick={() => openModal(project)}
          >
            {/* <div className="content-card" data-projects-item=""> */}
              <figure className="projects-avatar-box">
                {project.tech.map((iconName, index) => (
                  <span key={index}>{icons[iconName]}</span>
                ))}
              </figure>
              <h4 className="projects-item-title">{project.name}</h4>
              <div className="projects-text">
                <p>{project.text}</p>
              </div>
              <div className="project-detail-info">
                <p>Detaylar ve uygulama bağlantısı için tıklayın</p>
              </div>
            {/* </div> */}
          </li>
        ))}
      </ul>

      <Modal active={modalActive} data={modalData} onClose={closeModal} />
    </section>
  );
}

export default Projects;
