import PropTypes from 'prop-types';
import { BsSortUp, BsSortDown } from 'react-icons/bs';

function DataTable({ columns, rows, rowKey = '_id', sortBy, sortDir, onSort, renderActions }) {
  return (
    <div className="admin-table-wrap responsive-cards">
      <table className="admin-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={col.sortable ? () => onSort(col.key) : undefined}
                style={{ cursor: col.sortable ? 'pointer' : 'default' }}
              >
                {col.label}
                {col.sortable && sortBy === col.key && (
                  <span className="ms-1">{sortDir === 'asc' ? <BsSortUp /> : <BsSortDown />}</span>
                )}
              </th>
            ))}
            {renderActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[rowKey]}>
              {columns.map((col) => (
                <td key={col.key} data-label={col.label}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
              {renderActions && (
                <td data-label="Actions">
                  <div className="admin-table-actions">{renderActions(row)}</div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      render: PropTypes.func,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  rows: PropTypes.array.isRequired,
  rowKey: PropTypes.string,
  sortBy: PropTypes.string,
  sortDir: PropTypes.string,
  onSort: PropTypes.func,
  renderActions: PropTypes.func,
};

export default DataTable;
