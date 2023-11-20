// ProjectModal.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './page.scss'


const ProjectModal = ({ show, onHide, project }) => {
  if (!project) {
    // If project is null, return null or some default content
    return null;
  }

  return (
        <Modal show={show} onHide={onHide} size="lg" centered className="Border CustomModal">
          <Modal.Header closeButton>
            <Modal.Title>{project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={project.image} alt={project.title} className="img-fluid" />
            <p>{project.description}</p>
            <p>Skills Used: {project.skills}</p>
            <p>
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                Project Link
              </a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide} className='Border'>
              Close 
            </Button>
          </Modal.Footer>
        </Modal>
  );
};

export default ProjectModal;
