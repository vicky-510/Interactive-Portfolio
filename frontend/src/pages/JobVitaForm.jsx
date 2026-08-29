import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import Card from '../components/ui/Card';
import JobForm from '../components/jobvita/JobForm';
import PasswordGateModal from '../components/ui/PasswordGateModal';
import Loader from '../components/Loader';
import {
  useAddJobMutation,
  useUpdateJobMutation,
  useGetJobQuery,
} from '../slices/jobApiSlice';

const emptyJob = {
  company: '',
  jobTitle: '',
  jobType: 'Full-time',
  location: '',
  jobPostingUrl: '',
  appliedDate: new Date().toISOString(),
  hrName: '',
  hrContact: '',
  status: 'Applied',
  nextActionDate: '',
  totalInterviewRounds: 0,
  roundsCleared: 0,
  notes: '',
};

function JobVitaForm() {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const navigate = useNavigate();
  const location = useLocation();

  const { data: existingJob, isLoading: isLoadingJob } = useGetJobQuery(id, { skip: !isEditMode });
  const [addJob, { isLoading: isAdding }] = useAddJobMutation();
  const [updateJob, { isLoading: isUpdating }] = useUpdateJobMutation();

  const [values, setValues] = useState(emptyJob);
  const [actionToken, setActionToken] = useState(location.state?.actionToken || null);
  const [gateOpen, setGateOpen] = useState(isEditMode && !location.state?.actionToken);

  useEffect(() => {
    if (existingJob) setValues(existingJob);
  }, [existingJob]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (isEditMode) {
        if (!actionToken) {
          setGateOpen(true);
          return;
        }
        await updateJob({ id, actionToken, ...values }).unwrap();
        toast.success('Application updated');
      } else {
        await addJob(values).unwrap();
        toast.success('Application added');
      }
      navigate('/jobvita');
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to save application');
      if (err?.status === 403) {
        setActionToken(null);
        setGateOpen(true);
      }
    }
  };

  if (isEditMode && isLoadingJob) {
    return (
      <DashboardLayout title="JobVita">
        <Loader />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="JobVita">
      <h4 className="mb-3" style={{ color: 'var(--admin-color-navy)' }}>
        {isEditMode ? 'Edit Job Application' : 'Add Job Application'}
      </h4>
      <Card>
        <JobForm
          values={values}
          onChange={setValues}
          onSubmit={submitHandler}
          onCancel={() => navigate('/jobvita')}
          isSaving={isAdding || isUpdating}
          submitLabel={isEditMode ? 'Update Application' : 'Add Application'}
        />
      </Card>

      <PasswordGateModal
        show={gateOpen}
        onHide={() => {
          setGateOpen(false);
          if (!actionToken) navigate('/jobvita');
        }}
        onVerified={(token) => {
          setActionToken(token);
          setGateOpen(false);
        }}
      />
    </DashboardLayout>
  );
}

export default JobVitaForm;
