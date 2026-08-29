import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Card from '../ui/Card';
import EmptyState from '../ui/EmptyState';

function InterviewFunnelChart({ analytics }) {
  const hasData = analytics && analytics.totalInterviews > 0;

  const chartData = [
    { label: 'Rounds Scheduled', value: analytics?.roundsCompleted ?? 0 },
    { label: 'Rounds Cleared', value: analytics?.roundsCleared ?? 0 },
  ];

  return (
    <Card title="Interview Analytics">
      {hasData ? (
        <>
          <div className="row g-2 mb-3 text-center">
            <div className="col-3">
              <div className="fw-bold" style={{ fontSize: 20, color: 'var(--admin-color-navy)' }}>
                {analytics.totalInterviews}
              </div>
              <div className="text-muted" style={{ fontSize: 12 }}>
                Interviews
              </div>
            </div>
            <div className="col-3">
              <div className="fw-bold" style={{ fontSize: 20, color: 'var(--admin-color-navy)' }}>
                {analytics.avgRounds}
              </div>
              <div className="text-muted" style={{ fontSize: 12 }}>
                Avg Rounds
              </div>
            </div>
            <div className="col-3">
              <div className="fw-bold" style={{ fontSize: 20, color: 'var(--admin-color-navy)' }}>
                {analytics.roundsCleared}
              </div>
              <div className="text-muted" style={{ fontSize: 12 }}>
                Rounds Cleared
              </div>
            </div>
            <div className="col-3">
              <div className="fw-bold" style={{ fontSize: 20, color: 'var(--admin-color-navy)' }}>
                {analytics.successRate}%
              </div>
              <div className="text-muted" style={{ fontSize: 12 }}>
                Success Rate
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" allowDecimals={false} tick={{ fontSize: 12 }} />
              <YAxis type="category" dataKey="label" width={120} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#182C61" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <EmptyState title="No interviews yet" message="Interview stats will appear once you start interviewing." />
      )}
    </Card>
  );
}

InterviewFunnelChart.propTypes = {
  analytics: PropTypes.shape({
    totalInterviews: PropTypes.number,
    roundsCompleted: PropTypes.number,
    roundsCleared: PropTypes.number,
    avgRounds: PropTypes.number,
    successRate: PropTypes.number,
  }),
};

export default InterviewFunnelChart;
