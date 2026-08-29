import PropTypes from 'prop-types';

function FilterBar({ children }) {
  return <div className="admin-filter-bar">{children}</div>;
}

FilterBar.propTypes = {
  children: PropTypes.node,
};

export function FilterSelect({ value, onChange, options, placeholder }) {
  return (
    <select className="admin-filter-select" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

FilterSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
};

export default FilterBar;
