import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { JOB_STATUSES, JOB_TYPES } from './statusMeta';

function toInputDate(value) {
  if (!value) return '';
  return new Date(value).toISOString().slice(0, 10);
}

function JobForm({ values, onChange, onSubmit, onCancel, isSaving, submitLabel = 'Save' }) {
  const set = (field) => (e) => onChange({ ...values, [field]: e.target.value });
  const setNum = (field) => (e) => onChange({ ...values, [field]: Number(e.target.value) });

  return (
    <form onSubmit={onSubmit}>
      <div className="admin-form-grid">
        <div className="admin-form-group">
          <label htmlFor="company">Company *</label>
          <input id="company" required value={values.company} onChange={set('company')} />
        </div>

        <div className="admin-form-group">
          <label htmlFor="jobTitle">Job Title *</label>
          <input id="jobTitle" required value={values.jobTitle} onChange={set('jobTitle')} />
        </div>

        <div className="admin-form-group">
          <label htmlFor="jobType">Job Type</label>
          <select id="jobType" value={values.jobType} onChange={set('jobType')}>
            {JOB_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="admin-form-group">
          <label htmlFor="location">Location</label>
          <input id="location" value={values.location} onChange={set('location')} />
        </div>

        <div className="admin-form-group">
          <label htmlFor="jobPostingUrl">Job Posting URL</label>
          <input id="jobPostingUrl" type="url" value={values.jobPostingUrl} onChange={set('jobPostingUrl')} />
        </div>

        <div className="admin-form-group">
          <label htmlFor="appliedDate">Applied Date</label>
          <input id="appliedDate" type="date" value={toInputDate(values.appliedDate)} onChange={set('appliedDate')} />
        </div>

        <div className="admin-form-group">
          <label htmlFor="hrName">HR / Recruiter Name</label>
          <input id="hrName" value={values.hrName} onChange={set('hrName')} />
        </div>

        <div className="admin-form-group">
          <label htmlFor="hrContact">HR / Recruiter Contact</label>
          <input id="hrContact" value={values.hrContact} onChange={set('hrContact')} />
        </div>

        <div className="admin-form-group">
          <label htmlFor="status">Status</label>
          <select id="status" value={values.status} onChange={set('status')}>
            {JOB_STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="admin-form-group">
          <label htmlFor="nextActionDate">Follow-up / Next Action Date</label>
          <input id="nextActionDate" type="date" value={toInputDate(values.nextActionDate)} onChange={set('nextActionDate')} />
        </div>

        <div className="admin-form-group">
          <label htmlFor="totalInterviewRounds">Total Interview Rounds</label>
          <input id="totalInterviewRounds" type="number" min="0" max="20" value={values.totalInterviewRounds} onChange={setNum('totalInterviewRounds')} />
        </div>

        <div className="admin-form-group">
          <label htmlFor="roundsCleared">Rounds Cleared</label>
          <input id="roundsCleared" type="number" min="0" max="20" value={values.roundsCleared} onChange={setNum('roundsCleared')} />
        </div>
      </div>

      <div className="admin-form-group mt-3">
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" rows={4} value={values.notes} onChange={set('notes')} />
      </div>

      <div className="admin-form-actions">
        <Button variant="outline-secondary" type="button" onClick={onCancel} disabled={isSaving}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" disabled={isSaving}>
          {isSaving ? 'Saving...' : submitLabel}
        </Button>
      </div>
    </form>
  );
}

JobForm.propTypes = {
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isSaving: PropTypes.bool,
  submitLabel: PropTypes.string,
};

export default JobForm;
