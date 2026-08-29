import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Card from '../ui/Card';
import EmptyState from '../ui/EmptyState';

const RANGES = [
  { key: 'weekly', label: 'Weekly' },
  { key: 'monthly', label: 'Monthly' },
  { key: 'yearly', label: 'Yearly' },
];

function ApplicationsOverTimeChart({ data, range, onRangeChange }) {
  const hasData = data && data.length > 0;

  return (
    <Card
      title={
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span>Applications Over Time</span>
          <ButtonGroup size="sm">
            {RANGES.map((r) => (
              <Button
                key={r.key}
                variant={range === r.key ? 'primary' : 'outline-secondary'}
                onClick={() => onRangeChange(r.key)}
              >
                {r.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      }
    >
      {hasData ? (
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="period" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="count" fill="#03BFCB" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <EmptyState title="No data for this range" />
      )}
    </Card>
  );
}

ApplicationsOverTimeChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ period: PropTypes.string, count: PropTypes.number })),
  range: PropTypes.string.isRequired,
  onRangeChange: PropTypes.func.isRequired,
};

export { RANGES };
export default ApplicationsOverTimeChart;
