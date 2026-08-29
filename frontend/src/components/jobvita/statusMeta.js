// Cross-referenced with backend/utils/jobStatusGroups.js — keep status lists in sync.

export const JOB_STATUSES = [
  'Applied',
  'Under Review',
  'HR Screening',
  'Technical Interview',
  'Managerial Interview',
  'HR Interview',
  'Offer',
  'Rejected',
  'Withdrawn',
  'On Hold',
];

export const JOB_TYPES = ['Full-time', 'Part-time', 'Internship', 'Contract', 'Freelance', 'Remote'];

export const STATUS_META = {
  Applied: { variant: 'info', color: '#3f7ee8' },
  'Under Review': { variant: 'info', color: '#3f7ee8' },
  'HR Screening': { variant: 'neutral', color: '#6c7a99' },
  'Technical Interview': { variant: 'warning', color: '#d98c0a' },
  'Managerial Interview': { variant: 'warning', color: '#c47a08' },
  'HR Interview': { variant: 'warning', color: '#b06f0a' },
  Offer: { variant: 'success', color: '#1aa971' },
  Rejected: { variant: 'danger', color: '#d64550' },
  Withdrawn: { variant: 'neutral', color: '#8a93a8' },
  'On Hold': { variant: 'neutral', color: '#a4790f' },
};

export const getStatusVariant = (status) => STATUS_META[status]?.variant ?? 'neutral';
export const getStatusColor = (status) => STATUS_META[status]?.color ?? '#6c7a99';
