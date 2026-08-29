import PropTypes from 'prop-types';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

function StatCard({ icon: Icon, value, label, trend }) {
  return (
    <div className="admin-stat-card">
      {Icon && (
        <div className="admin-stat-icon">
          <Icon size={20} />
        </div>
      )}
      <div>
        <h3 className="admin-stat-value">{value}</h3>
        <p className="admin-stat-label">{label}</p>
      </div>
      {trend !== undefined && trend !== null && (
        <span className={`admin-stat-trend ${trend >= 0 ? 'up' : 'down'}`}>
          {trend >= 0 ? <BsArrowUp /> : <BsArrowDown />} {Math.abs(trend)}%
        </span>
      )}
    </div>
  );
}

StatCard.propTypes = {
  icon: PropTypes.elementType,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  trend: PropTypes.number,
};

export default StatCard;
