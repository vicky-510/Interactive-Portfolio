import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Alert } from 'react-bootstrap';
import Modal from './Modal';
import { useVerifyPasswordMutation } from '../../slices/adminApiSlice';

function PasswordGateModal({ show, onHide, onVerified }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [verifyPassword, { isLoading }] = useVerifyPasswordMutation();

  const close = () => {
    setPassword('');
    setError('');
    onHide();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await verifyPassword({ password }).unwrap();
      setPassword('');
      onVerified(res.actionToken);
    } catch (err) {
      setError(err?.data?.message || 'Invalid password');
    }
  };

  return (
    <Modal
      show={show}
      onHide={close}
      title="Confirm Action"
      footer={
        <>
          <Button variant="outline-secondary" onClick={close} disabled={isLoading}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="password-gate-form" disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Verify'}
          </Button>
        </>
      }
    >
      <p className="text-muted">Enter your password to continue.</p>
      <Form id="password-gate-form" onSubmit={submitHandler}>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            required
          />
        </Form.Group>
        {error && (
          <Alert variant="danger" className="mt-3 mb-0 py-2">
            {error}
          </Alert>
        )}
      </Form>
    </Modal>
  );
}

PasswordGateModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onVerified: PropTypes.func.isRequired,
};

export default PasswordGateModal;
