import PropTypes from 'prop-types';

function Card({ title, children, className = '' }) {
  return (
    <div className={`admin-card ${className}`}>
      {title && <h3 className="admin-card-title">{title}</h3>}
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
