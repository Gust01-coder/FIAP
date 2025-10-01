import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

const ModalApresentacao = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <style>
        {`
          .modal-90w {
            max-width: none;
            width: 90%;
          }
          
          @media (max-width: 576px) {
            .modal-90w {
              width: 95%;
              margin: 1rem auto;
            }
          }
          
          .video-wrapper {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
          }
          
          .video-wrapper > div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100% !important;
            height: 100% !important;
          }
        `}
      </style>
      <Button variant="outline-dark" size="lg" className="d-none d-sm-inline-block" onClick={handleShow}>
        <i className="bi bi-play-circle me-2"></i>
        Apresentação
      </Button>
      <Button variant="outline-dark" size="lg" className="d-inline-block d-sm-none w-100" onClick={handleShow}>
        <i className="bi bi-play-circle me-2"></i>
        Ver Apresentação
      </Button>

      <Modal
        centered
        dialogClassName="modal-90w"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header style={{ borderBottom: "none" }} closeButton>
          Apresentação
        </Modal.Header>
        <Modal.Body style={{ padding: "0" }}>
          <div className="video-wrapper">
            <ReactPlayer
              autoPlay
              width="100%"
              height="100%"
              src="https://www.youtube.com/watch?v=ircLrH-Wu0Q&ab_channel=sat"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalApresentacao;
