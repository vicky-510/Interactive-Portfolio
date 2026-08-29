import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

function SearchInput({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div className="admin-search-input">
      <BsSearch size={14} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchInput;
