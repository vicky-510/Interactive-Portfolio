import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import Modal from '../ui/Modal';

const CATEGORIES = [
  'Interview Preparation',
  'Companies',
  'Technical Notes',
  'HR Notes',
  'Career',
  'Personal',
];

const emptyNote = { title: '', content: '', category: 'Personal' };

function NoteForm({ show, onHide, onSubmit, initialNote, isSaving }) {
  const [values, setValues] = useState(emptyNote);
  const [wasOpen, setWasOpen] = useState(false);

  if (show && !wasOpen) {
    setWasOpen(true);
    setValues(initialNote || emptyNote);
  } else if (!show && wasOpen) {
    setWasOpen(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      title={initialNote ? 'Edit Note' : 'New Note'}
      footer={
        <>
          <Button variant="outline-secondary" onClick={onHide} disabled={isSaving}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="note-form" disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save'}
          </Button>
        </>
      }
    >
      <Form id="note-form" onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={values.category}
            onChange={(e) => setValues({ ...values, category: e.target.value })}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={values.content}
            onChange={(e) => setValues({ ...values, content: e.target.value })}
            required
          />
        </Form.Group>
      </Form>
    </Modal>
  );
}

NoteForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialNote: PropTypes.object,
  isSaving: PropTypes.bool,
};

export default NoteForm;
