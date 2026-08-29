import PropTypes from 'prop-types';

function Badge({ children, variant = 'neutral' }) {
  return <span className={`admin-badge admin-badge-${variant}`}>{children}</span>;
}

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['success', 'warning', 'danger', 'info', 'neutral']),
};

export default Badge;
