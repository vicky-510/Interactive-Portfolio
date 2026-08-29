import PropTypes from 'prop-types';
import { Modal as BsModal } from 'react-bootstrap';

function Modal({ show, onHide, title, children, footer }) {
  return (
    <BsModal show={show} onHide={onHide} centered>
      {title && (
        <BsModal.Header closeButton>
          <BsModal.Title>{title}</BsModal.Title>
        </BsModal.Header>
      )}
      <BsModal.Body>{children}</BsModal.Body>
      {footer && <BsModal.Footer>{footer}</BsModal.Footer>}
    </BsModal>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
};

export default Modal;
