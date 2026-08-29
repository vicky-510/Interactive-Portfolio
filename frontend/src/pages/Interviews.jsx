import PropTypes from 'prop-types';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import Card from '../components/ui/Card';
import EmptyState from '../components/ui/EmptyState';
import Loader from '../components/Loader';
import StatusBadge from '../components/jobvita/StatusBadge';
import { useGetJobsQuery } from '../slices/jobApiSlice';

const INTERVIEW_STATUSES = ['Technical Interview', 'Managerial Interview', 'HR Interview'];

function formatDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function InterviewGroup({ title, jobs }) {
  return (
    <Card title={title}>
      {jobs.length === 0 ? (
        <p className="text-muted mb-0">Nothing here.</p>
      ) : (
        <div className="d-flex flex-column gap-3">
          {jobs.map((job) => (
            <div key={job._id} className="d-flex justify-content-between align-items-center">
              <div>
                <div style={{ fontWeight: 600, color: 'var(--admin-color-navy)' }}>
                  {job.jobTitle} &middot; {job.company}
                </div>
                <div className="text-muted" style={{ fontSize: 13 }}>
                  Follow-up: {formatDate(job.nextActionDate)} &middot; Rounds {job.roundsCleared}/{job.totalInterviewRounds}
                </div>
              </div>
              <StatusBadge status={job.status} />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

InterviewGroup.propTypes = {
  title: PropTypes.string.isRequired,
  jobs: PropTypes.array.isRequired,
};

function Interviews() {
  const { data, isLoading, isError } = useGetJobsQuery({
    sortBy: 'appliedDate',
    sortDir: 'desc',
    limit: 100,
  });

  const jobs = data?.data ?? [];
  const now = new Date();

  const upcoming = jobs.filter(
    (j) => INTERVIEW_STATUSES.includes(j.status) && j.nextActionDate && new Date(j.nextActionDate) >= now
  );
  const overdue = jobs.filter(
    (j) => j.nextActionDate && new Date(j.nextActionDate) < now && !['Offer', 'Rejected', 'Withdrawn'].includes(j.status)
  );
  const inInterviewStage = jobs.filter((j) => INTERVIEW_STATUSES.includes(j.status));

  return (
    <DashboardLayout title="Interviews">
      <h4 className="mb-3" style={{ color: 'var(--admin-color-navy)' }}>Interviews &amp; Follow-ups</h4>

      {isLoading && <Loader />}
      {isError && <p className="text-danger">Could not load interview data.</p>}

      {!isLoading && !isError && jobs.length === 0 ? (
        <EmptyState title="No applications yet" message="Add job applications to track interviews and follow-ups." />
      ) : (
        !isLoading && !isError && (
          <div className="d-flex flex-column gap-3">
            <InterviewGroup title="Overdue Follow-ups" jobs={overdue} />
            <InterviewGroup title="Upcoming Interviews / Follow-ups" jobs={upcoming} />
            <InterviewGroup title="All In-Progress Interviews" jobs={inInterviewStage} />
          </div>
        )
      )}
    </DashboardLayout>
  );
}

export default Interviews;
