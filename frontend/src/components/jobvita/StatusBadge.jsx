import PropTypes from 'prop-types';
import Badge from '../ui/Badge';
import { getStatusVariant } from './statusMeta';

function StatusBadge({ status }) {
  return <Badge variant={getStatusVariant(status)}>{status}</Badge>;
}

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusBadge;
