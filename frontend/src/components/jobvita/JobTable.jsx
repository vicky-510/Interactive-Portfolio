import PropTypes from 'prop-types';
import { BsPencilFill, BsTrashFill, BsBoxArrowUpRight } from 'react-icons/bs';
import DataTable from '../ui/DataTable';
import StatusBadge from './StatusBadge';

function formatDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function JobTable({ jobs, sortBy, sortDir, onSort, onEdit, onDelete }) {
  const columns = [
    { key: 'company', label: 'Company', sortable: true },
    { key: 'jobTitle', label: 'Job Title' },
    { key: 'jobType', label: 'Type' },
    { key: 'location', label: 'Location' },
    { key: 'appliedDate', label: 'Applied', sortable: true, render: (r) => formatDate(r.appliedDate) },
    { key: 'status', label: 'Status', sortable: true, render: (r) => <StatusBadge status={r.status} /> },
    {
      key: 'roundsCleared',
      label: 'Rounds',
      sortable: true,
      render: (r) => `${r.roundsCleared}/${r.totalInterviewRounds}`,
    },
    { key: 'nextActionDate', label: 'Follow-up', render: (r) => formatDate(r.nextActionDate) },
    {
      key: 'jobPostingUrl',
      label: 'Posting',
      render: (r) =>
        r.jobPostingUrl ? (
          <a href={r.jobPostingUrl} target="_blank" rel="noreferrer" className="admin-icon-btn">
            <BsBoxArrowUpRight />
          </a>
        ) : (
          '—'
        ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      rows={jobs}
      sortBy={sortBy}
      sortDir={sortDir}
      onSort={onSort}
      renderActions={(row) => (
        <>
          <button className="admin-icon-btn" onClick={() => onEdit(row)} aria-label="Edit application">
            <BsPencilFill />
          </button>
          <button className="admin-icon-btn danger" onClick={() => onDelete(row)} aria-label="Delete application">
            <BsTrashFill />
          </button>
        </>
      )}
    />
  );
}

JobTable.propTypes = {
  jobs: PropTypes.array.isRequired,
  sortBy: PropTypes.string,
  sortDir: PropTypes.string,
  onSort: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default JobTable;
