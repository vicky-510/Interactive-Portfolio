import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Modal from './Modal';

function ConfirmDialog({
  show,
  onHide,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to continue?',
  confirmLabel = 'Confirm',
  danger = false,
  loading = false,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      title={title}
      footer={
        <>
          <Button variant="outline-secondary" onClick={onHide} disabled={loading}>
            Cancel
          </Button>
          <Button variant={danger ? 'danger' : 'primary'} onClick={onConfirm} disabled={loading}>
            {loading ? 'Please wait...' : confirmLabel}
          </Button>
        </>
      }
    >
      <p className="mb-0">{message}</p>
    </Modal>
  );
}

ConfirmDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.node,
  confirmLabel: PropTypes.string,
  danger: PropTypes.bool,
  loading: PropTypes.bool,
};

export default ConfirmDialog;
