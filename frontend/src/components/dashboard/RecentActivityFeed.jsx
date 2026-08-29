import PropTypes from 'prop-types';
import Card from '../ui/Card';
import EmptyState from '../ui/EmptyState';
import StatusBadge from '../jobvita/StatusBadge';

function timeAgo(dateStr) {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function RecentActivityFeed({ activity }) {
  const hasData = activity && activity.length > 0;

  return (
    <Card title="Recent Activity">
      {hasData ? (
        <div className="d-flex flex-column gap-3">
          {activity.map((item) => (
            <div key={item._id} className="d-flex justify-content-between align-items-center">
              <div>
                <div style={{ fontWeight: 600, color: 'var(--admin-color-navy)', fontSize: 14 }}>
                  {item.jobTitle} &middot; {item.company}
                </div>
                <div className="text-muted" style={{ fontSize: 12 }}>
                  Updated {timeAgo(item.updatedAt)}
                </div>
              </div>
              <StatusBadge status={item.status} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyState title="No activity yet" message="Recent job application updates will show up here." />
      )}
    </Card>
  );
}

RecentActivityFeed.propTypes = {
  activity: PropTypes.array,
};

export default RecentActivityFeed;
