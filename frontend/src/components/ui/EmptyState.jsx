import PropTypes from 'prop-types';
import { BsInbox } from 'react-icons/bs';

function EmptyState({ icon: Icon = BsInbox, title = 'Nothing here yet', message, action }) {
  return (
    <div className="admin-empty-state">
      <div className="admin-empty-state-icon">
        <Icon />
      </div>
      <h5>{title}</h5>
      {message && <p className="mb-3">{message}</p>}
      {action}
    </div>
  );
}

EmptyState.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  message: PropTypes.node,
  action: PropTypes.node,
};

export default EmptyState;
