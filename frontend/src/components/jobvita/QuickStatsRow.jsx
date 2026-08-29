import PropTypes from 'prop-types';
import { BsBriefcaseFill, BsHourglassSplit, BsCalendarCheckFill, BsTrophyFill, BsXCircleFill } from 'react-icons/bs';
import StatCard from '../ui/StatCard';

function QuickStatsRow({ stats }) {
  const cards = [
    { icon: BsBriefcaseFill, value: stats?.total ?? 0, label: 'Total Applications' },
    { icon: BsHourglassSplit, value: stats?.active ?? 0, label: 'Active' },
    { icon: BsCalendarCheckFill, value: stats?.interviews ?? 0, label: 'Interviews' },
    { icon: BsTrophyFill, value: stats?.offers ?? 0, label: 'Offers' },
    { icon: BsXCircleFill, value: stats?.rejected ?? 0, label: 'Rejected' },
  ];

  return (
    <div className="admin-quickstats-row">
      {cards.map(({ icon, value, label }) => (
        <StatCard key={label} icon={icon} value={value} label={label} />
      ))}
    </div>
  );
}

QuickStatsRow.propTypes = {
  stats: PropTypes.shape({
    total: PropTypes.number,
    active: PropTypes.number,
    interviews: PropTypes.number,
    offers: PropTypes.number,
    rejected: PropTypes.number,
  }),
};

export default QuickStatsRow;
