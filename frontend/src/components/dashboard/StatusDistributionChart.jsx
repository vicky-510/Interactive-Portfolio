import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getStatusColor } from '../jobvita/statusMeta';
import Card from '../ui/Card';
import EmptyState from '../ui/EmptyState';

function StatusDistributionChart({ data }) {
  const hasData = data && data.length > 0;

  return (
    <Card title="Application Status">
      {hasData ? (
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="status"
              innerRadius={60}
              outerRadius={95}
              paddingAngle={2}
            >
              {data.map((entry) => (
                <Cell key={entry.status} fill={getStatusColor(entry.status)} />
              ))}
            </Pie>
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <EmptyState title="No applications yet" message="Add a job application to see status breakdown." />
      )}
    </Card>
  );
}

StatusDistributionChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ status: PropTypes.string, count: PropTypes.number })),
};

export default StatusDistributionChart;
