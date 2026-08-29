import PropTypes from 'prop-types';
import { BsPinAngleFill, BsPinAngle, BsPencilFill, BsTrashFill } from 'react-icons/bs';
import Badge from '../ui/Badge';

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function NoteCard({ note, onEdit, onDelete, onTogglePin }) {
  return (
    <div className="admin-note-card">
      <div className="admin-note-card-header">
        <h5 className="admin-note-title">{note.title}</h5>
        <button className="admin-icon-btn" onClick={() => onTogglePin(note)} aria-label="Toggle pin">
          {note.pinned ? <BsPinAngleFill color="var(--admin-color-accent)" /> : <BsPinAngle />}
        </button>
      </div>
      <p className="admin-note-content">{note.content}</p>
      <div className="admin-note-meta">
        <Badge variant="neutral">{note.category}</Badge>
        <span>{formatDate(note.updatedAt)}</span>
      </div>
      <div className="admin-table-actions">
        <button className="admin-icon-btn" onClick={() => onEdit(note)} aria-label="Edit note">
          <BsPencilFill />
        </button>
        <button className="admin-icon-btn danger" onClick={() => onDelete(note)} aria-label="Delete note">
          <BsTrashFill />
        </button>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onTogglePin: PropTypes.func.isRequired,
};

export default NoteCard;
