import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import QuickStatsRow from '../components/jobvita/QuickStatsRow';
import JobTable from '../components/jobvita/JobTable';
import SearchInput from '../components/ui/SearchInput';
import FilterBar, { FilterSelect } from '../components/ui/FilterBar';
import Pagination from '../components/ui/Pagination';
import EmptyState from '../components/ui/EmptyState';
import PasswordGateModal from '../components/ui/PasswordGateModal';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import Loader from '../components/Loader';
import { useGetJobsQuery, useDeleteJobMutation } from '../slices/jobApiSlice';
import { JOB_STATUSES, JOB_TYPES } from '../components/jobvita/statusMeta';

function JobVita() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [jobType, setJobType] = useState('');
  const [sortBy, setSortBy] = useState('appliedDate');
  const [sortDir, setSortDir] = useState('desc');
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetJobsQuery({
    search: search || undefined,
    status: status || undefined,
    jobType: jobType || undefined,
    sortBy,
    sortDir,
    page,
    limit: 10,
  });

  const [deleteJob, { isLoading: isDeleting }] = useDeleteJobMutation();

  const [pendingAction, setPendingAction] = useState(null); // { type: 'edit' | 'delete', job }
  const [gateOpen, setGateOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [actionToken, setActionToken] = useState(null);

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(key);
      setSortDir('desc');
    }
  };

  const openGate = (type, job) => {
    setPendingAction({ type, job });
    setGateOpen(true);
  };

  const onVerified = (token) => {
    setActionToken(token);
    setGateOpen(false);

    if (pendingAction?.type === 'edit') {
      navigate(`/jobvita/${pendingAction.job._id}/edit`, { state: { actionToken: token } });
    } else if (pendingAction?.type === 'delete') {
      setConfirmDeleteOpen(true);
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteJob({ id: pendingAction.job._id, actionToken }).unwrap();
      toast.success('Application deleted');
      setConfirmDeleteOpen(false);
      setPendingAction(null);
      setActionToken(null);
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to delete application');
      if (err?.status === 403) {
        setConfirmDeleteOpen(false);
        openGate('delete', pendingAction.job);
      }
    }
  };

  return (
    <DashboardLayout title="JobVita">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <h4 className="mb-0" style={{ color: 'var(--admin-color-navy)' }}>Job Application Tracker</h4>
        <Button variant="primary" onClick={() => navigate('/jobvita/new')}>
          <BsPlusLg className="me-1" /> Add Job Application
        </Button>
      </div>

      <QuickStatsRow stats={data?.quickStats} />

      <FilterBar>
        <SearchInput value={search} onChange={(v) => { setSearch(v); setPage(1); }} placeholder="Search company, title, HR..." />
        <FilterSelect value={status} onChange={(v) => { setStatus(v); setPage(1); }} options={JOB_STATUSES} placeholder="All statuses" />
        <FilterSelect value={jobType} onChange={(v) => { setJobType(v); setPage(1); }} options={JOB_TYPES} placeholder="All job types" />
      </FilterBar>

      {isLoading && <Loader />}
      {isError && <p className="text-danger">Could not load job applications.</p>}

      {!isLoading && !isError && data && (
        data.data.length === 0 ? (
          <EmptyState
            title="No job applications yet"
            message="Start tracking your job search by adding your first application."
            action={
              <Button variant="primary" onClick={() => navigate('/jobvita/new')}>
                <BsPlusLg className="me-1" /> Add Job Application
              </Button>
            }
          />
        ) : (
          <>
            <JobTable
              jobs={data.data}
              sortBy={sortBy}
              sortDir={sortDir}
              onSort={handleSort}
              onEdit={(job) => openGate('edit', job)}
              onDelete={(job) => openGate('delete', job)}
            />
            <Pagination
              page={data.pagination.page}
              totalPages={data.pagination.totalPages}
              totalCount={data.pagination.totalCount}
              onPageChange={setPage}
            />
          </>
        )
      )}

      <PasswordGateModal show={gateOpen} onHide={() => setGateOpen(false)} onVerified={onVerified} />

      <ConfirmDialog
        show={confirmDeleteOpen}
        onHide={() => setConfirmDeleteOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Job Application"
        message={`Delete the application for "${pendingAction?.job?.jobTitle}" at "${pendingAction?.job?.company}"? This cannot be undone.`}
        confirmLabel="Delete"
        danger
        loading={isDeleting}
      />
    </DashboardLayout>
  );
}

export default JobVita;
