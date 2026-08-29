import { useState } from 'react';
import {
  BsBriefcaseFill, BsHourglassSplit, BsCalendarCheckFill,
  BsTrophyFill, BsXCircleFill, BsGraphUpArrow,
} from 'react-icons/bs';
import StatCard from '../ui/StatCard';
import StatusDistributionChart from './StatusDistributionChart';
import ApplicationsOverTimeChart from './ApplicationsOverTimeChart';
import InterviewFunnelChart from './InterviewFunnelChart';
import StorageWidget from './StorageWidget';
import RecentActivityFeed from './RecentActivityFeed';
import Loader from '../Loader';
import { useGetDashboardStatsQuery, useGetStorageStatsQuery } from '../../slices/dashboardApiSlice';

function DashHome() {
  const [range, setRange] = useState('monthly');
  const { data, isLoading, isError } = useGetDashboardStatsQuery({ range });
  const { data: storage, isLoading: storageLoading } = useGetStorageStatsQuery();

  if (isLoading) return <Loader />;
  if (isError || !data) {
    return <p className="text-danger">Could not load dashboard statistics.</p>;
  }

  const { totals, rates, statusDistribution, applicationsOverTime, interviewAnalytics, recentActivity } = data;

  const statCards = [
    { icon: BsBriefcaseFill, value: totals.totalJobs, label: 'Total Jobs Applied' },
    { icon: BsHourglassSplit, value: totals.inProgress, label: 'In Progress' },
    { icon: BsCalendarCheckFill, value: totals.interviews, label: 'Interviews' },
    { icon: BsTrophyFill, value: totals.offers, label: 'Offers' },
    { icon: BsXCircleFill, value: totals.rejected, label: 'Rejected' },
    { icon: BsGraphUpArrow, value: totals.appliedThisWeek, label: 'Applied This Week' },
    { icon: BsGraphUpArrow, value: totals.appliedThisMonth, label: 'Applied This Month' },
    { icon: BsGraphUpArrow, value: `${rates.interviewConversionRate}%`, label: 'Interview Conversion' },
    { icon: BsGraphUpArrow, value: `${rates.applicationSuccessRate}%`, label: 'Success Rate' },
  ];

  return (
    <div className="d-flex flex-column gap-4">
      <div className="row g-3">
        {statCards.map(({ icon, value, label }) => (
          <div className="col-6 col-md-4 col-xl-3" key={label}>
            <StatCard icon={icon} value={value} label={label} />
          </div>
        ))}
      </div>

      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <StatusDistributionChart data={statusDistribution} />
        </div>
        <div className="col-12 col-lg-6">
          <ApplicationsOverTimeChart data={applicationsOverTime} range={range} onRangeChange={setRange} />
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <InterviewFunnelChart analytics={interviewAnalytics} />
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column gap-3">
          <StorageWidget storage={storage} isLoading={storageLoading} />
          <RecentActivityFeed activity={recentActivity} />
        </div>
      </div>
    </div>
  );
}

export default DashHome
